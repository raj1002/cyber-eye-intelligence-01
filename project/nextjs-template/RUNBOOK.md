# RUNBOOK.md

Operational playbook for **Cyber-Eye Intelligence**. Owner: Engineering. On-call rotation in PagerDuty (`cyber-eye-prod`).

> If you're reading this during an incident: don't improvise. Find the relevant section, follow it line by line, and document what you did in the incident log at `/ops/incidents/`.

---

## Table of contents

1. [Architecture at a glance](#1-architecture-at-a-glance)
2. [Environments & access](#2-environments--access)
3. [Deploy a change](#3-deploy-a-change)
4. [Rollback a bad deploy](#4-rollback-a-bad-deploy)
5. [Restore content from Sanity backup](#5-restore-content-from-sanity-backup)
6. [Restore intake records from Supabase backup](#6-restore-intake-records-from-supabase-backup)
7. [Rotate a secret](#7-rotate-a-secret)
8. [Common incidents](#8-common-incidents)
9. [Routine maintenance](#9-routine-maintenance)
10. [Escalation contacts](#10-escalation-contacts)

---

## 1. Architecture at a glance

```
                            ┌──────────────────┐
   User ───── DNS ───►       │   Cloudflare      │ ← proxied, WAF on
                            └────────┬─────────┘
                                     │
                            ┌────────▼─────────┐
                            │   Vercel (bom1)   │ ← Next.js 14 SSR/ISR
                            └────────┬─────────┘
                                     │
              ┌──────────────────────┼──────────────────────┐
              ▼                      ▼                      ▼
      ┌──────────────┐       ┌──────────────┐      ┌──────────────┐
      │   Sanity      │       │  Supabase     │      │   Resend      │
      │ (CMS, content)│       │ (intake DB,   │      │  (email)      │
      │   dataset:    │       │  audit log)   │      │               │
      │   production  │       │  ap-south-1   │      │               │
      └──────────────┘       └──────────────┘      └──────────────┘
              ▲                      ▲
              │                      │
        ┌─────┴─────┐          ┌─────┴─────┐
        │  Studio   │          │ Postgres  │
        │ (/studio) │          │ backups   │
        └───────────┘          └───────────┘
```

**Observability:** Sentry (errors), Vercel Analytics + Plausible (traffic), BetterStack (uptime + status page).

---

## 2. Environments & access

| Env | URL | Branch | Region | Notes |
|---|---|---|---|---|
| Production | `cyber-eye.in` | `main` | `bom1` | Auto-deploy on merge. Locked behind branch protection. |
| Staging | `staging.cyber-eye.in` | `staging` | `bom1` | Auto-deploy on merge. Same infra as prod. Used for full pre-prod testing. |
| Preview | `*.vercel.app` | feature branches | `bom1` | Each PR gets a unique preview URL. Preview DB rows pruned after 30 days. |
| Local | `localhost:3000` | any | — | Use `.env.local` with the dev Sanity dataset. |

### Secret vault

All credentials live in **1Password / "Cyber-Eye Engineering"** vault. Categories:
- Vercel (project token, deploy hook)
- Sanity (read token, write token, webhook secret)
- Supabase (service-role key, anon key, DB URL)
- Resend (API key, sender domain DKIM)
- Cloudflare (API token, Turnstile site/secret keys)
- Sentry (DSN, auth token for source-maps)
- Upstash (REST URL + token)

**Never paste secrets into Slack, GitHub, or PR descriptions.**

---

## 3. Deploy a change

### Standard flow (95% of changes)

1. Branch off `main`: `git checkout -b feat/short-description`
2. Commit, push, open PR.
3. CI must pass: `typecheck`, `lint`, `test`, `test:e2e`, `lhci`. **No exceptions.**
4. At least one approval (founder or senior engineer).
5. Merge → Vercel auto-deploys to prod within ~3 min.
6. Smoke-check the prod URL after deploy:
   - `/` loads, hero stats animate, no console errors
   - `/contact` form renders
   - `/studio` loads (auth-gated)

### High-risk changes (DB schema, infra, prod data)

1. Open the PR with the `risk:high` label.
2. Deploy to **staging first**. Hit it manually for ≥ 30 min.
3. **Tag and release**: `git tag prod-2026-05-21-1 && git push --tags` so we have a known-good marker.
4. Schedule the prod merge for Tuesday morning IST (low-traffic, full team available).
5. Watch Sentry + Vercel logs for 1 hour after merge.

### Rolling back

See [§ 4](#4-rollback-a-bad-deploy).

---

## 4. Rollback a bad deploy

### Option A — Vercel instant rollback (preferred, < 60 sec)

1. Go to Vercel → Project → **Deployments**.
2. Find the last known-good deployment (anything before the bad merge).
3. Click `⋯` → **Promote to Production**.
4. Verify prod URL is serving the rolled-back build (`view-source:` and check the build hash in the meta tag).
5. **Then** revert the offending PR on `main` so the next deploy doesn't re-introduce it.

### Option B — Git revert (when Vercel rollback won't help, e.g. schema change)

```bash
git revert <bad-commit-sha> --no-edit
git push origin main
```

Then follow the schema-rollback procedure below if Sanity schemas or Supabase migrations were involved.

### When Vercel rollback is NOT enough

- **Sanity schema change merged + content authored against it** → you can't just rollback. Re-deploy the new schema temporarily, export the affected docs, manually migrate them in the studio, then roll forward properly.
- **Supabase migration applied** → revert the SQL: `psql $DATABASE_URL -f migrations/rollback/<migration>.sql`. Then verify table state with `\d intakes`.

---

## 5. Restore content from Sanity backup

Sanity exports the `production` dataset nightly to `s3://cyber-eye-backups/sanity/`. Retention: 90 days.

### Full restore (catastrophic loss)

```bash
# 1. Download yesterday's snapshot
aws s3 cp s3://cyber-eye-backups/sanity/production-YYYY-MM-DD.tar.gz .

# 2. Untar
tar -xzf production-YYYY-MM-DD.tar.gz

# 3. Import to a NEW dataset first (never restore directly to production)
pnpm sanity dataset create production-restore-YYYY-MM-DD
pnpm sanity dataset import production-YYYY-MM-DD.ndjson production-restore-YYYY-MM-DD --replace

# 4. Verify document counts match expectations in Vision
#    Then swap the dataset alias:
pnpm sanity alias set production production-restore-YYYY-MM-DD

# 5. In Vercel env, no change needed — the SANITY_DATASET=production var still resolves
#    Trigger a redeploy to invalidate ISR caches:
vercel --prod
```

### Single-document restore (most common)

1. Open Sanity Studio → Document → **History**.
2. Find the revision you want; click **Restore**.
3. Publish. ISR will pick it up within 5 min, or force-revalidate via the webhook.

---

## 6. Restore intake records from Supabase backup

Supabase auto-backups daily at 02:00 IST. Retention: 7 days on the free tier, 30 days on pro.

### Restore a deleted intake row

```sql
-- Connect to the prod DB via Supabase SQL editor (not your local psql — uses RLS bypass)
-- Find the row in a recent backup snapshot under Database > Backups
-- Use the "Point-in-time recovery" feature in Supabase if available

-- Or, if you have the row ID and want to restore just that row:
INSERT INTO intakes (id, created_at, name, email, phone, organisation, matter_encrypted, ip, ua, request_id)
SELECT id, created_at, name, email, phone, organisation, matter_encrypted, ip, ua, request_id
FROM intakes_backup_2026_05_20
WHERE id = '<the-id>';
```

### Decrypt a matter field for an investigator

The `matter_encrypted` column is sealed using libsodium with a key in `MATTER_DECRYPT_KEY` (server-side only).

```bash
# In a secure shell (not your local laptop unless KMS-issued ephemeral key)
node scripts/decrypt-matter.ts --id <intake-id> > matter-<intake-id>.txt
# File auto-shreds itself after 1 hour via cron
```

**Decryption events are logged.** Every decrypt creates a row in `audit_decryption` with the operator, reason, and timestamp.

---

## 7. Rotate a secret

### Quarterly rotation (Resend, Sanity write token, Supabase service-role)

1. Generate new secret in the provider's console.
2. Add it in **Vercel** as a new env var (`RESEND_API_KEY_NEW`).
3. Deploy a change that reads the new var. Verify it works.
4. Remove the old var in Vercel.
5. Revoke the old secret in the provider's console.
6. Update 1Password vault.

### Emergency rotation (secret leaked)

1. **Revoke the leaked secret immediately** in the provider's console.
2. Generate a new one.
3. Set it in Vercel as the canonical var name (`RESEND_API_KEY`).
4. Deploy.
5. Audit: who had access, when was it leaked, what could have been done with it.
6. File an incident report at `/ops/incidents/`.

---

## 8. Common incidents

### "Site is down" (5xx on every route)

1. Check Vercel status: https://www.vercel-status.com
2. Check the latest deployment — did it fail? Check build logs.
3. Check Sentry — is there a flood of 5xx with a shared stack trace? Likely a missing env var or a failed Sanity query.
4. If it's a code issue → rollback per § 4.
5. If it's a Vercel outage → post on status page; nothing to do but wait.

### Contact form returns 500

1. Check Sentry for the actual error.
2. Most likely causes:
   - Resend API down → check https://status.resend.com; fallback queue (next 24h batches) is in `lib/intake/fallback-queue.ts`.
   - Supabase pool exhausted → check Supabase dashboard; bump pool size or restart pooler.
   - Turnstile token invalid → check `TURNSTILE_SECRET_KEY` is set in Vercel.
   - Rate-limit triggered → expected behaviour; user sees a friendly error.

### Sanity Studio won't load

1. Open `/studio` directly — does it 500 or show a CORS error?
2. CORS: add the current preview URL to Sanity's CORS origins list.
3. 500: check `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` are set.
4. Local-only failure: run `pnpm sanity:dev` and check the Vision tab.

### "I edited a doc in Sanity but the site still shows the old version"

1. ISR cache. The change takes up to `revalidate` seconds (5 min for marketing).
2. To force-revalidate now:
   ```bash
   curl -X POST "https://cyber-eye.in/api/revalidate?secret=$REVALIDATE_SECRET&path=/services/mobile-forensics"
   ```
3. If still stale: check that the Sanity webhook is firing (Sanity → Manage → API → Webhooks → Logs).

### LCP regression after deploy

1. Open Vercel Analytics → Web Vitals → filter by route.
2. If a specific route regressed, check what changed in that page's PR.
3. Usual suspects: unoptimised image (no `sizes`, missing `priority` on LCP image), new client-side JS dep, removed `loading="lazy"` from below-fold images.
4. Fix and re-deploy. LHCI in CI should have caught it — investigate why it didn't.

### Sentry alert: "intake form submission failure rate > 2%"

1. Check the linked Sentry issue — read the actual error.
2. If it's a code bug → fix, deploy, post-mortem.
3. If it's an upstream failure (Resend, Supabase) → see "Contact form 500" above.
4. If it's bot traffic → check Turnstile metrics; tighten rate limit if needed.

---

## 9. Routine maintenance

### Weekly

- Review Sentry triage queue. Close noise, file real issues.
- Review intake audit log for anomalies (impossible IPs, unusual request patterns).
- Verify nightly backups succeeded (Supabase dashboard + S3 listing).

### Monthly

- Restore the most recent Supabase backup to a staging DB and verify it boots clean. **A backup you haven't tested is not a backup.**
- Update dependencies: `pnpm up --interactive --latest`. Run full test suite. Open one PR per major bump.
- Review CSP report-only violations in Sentry; tighten policy where warranted.

### Quarterly

- Rotate secrets (§ 7).
- Renew Cloudflare API tokens.
- DPDP-style audit: review what data we collect, what we retain, what we delete. Update privacy page if anything changed.
- Penetration test scope refresh — if budget allows, external pen-test annually.

### Annually

- DNS / domain renewals (check before December — `.in` registrar deadlines bite).
- Vercel / Sanity / Supabase plan review.
- Update this RUNBOOK.

---

## 10. Escalation contacts

| Role | Name | Channel | Hours |
|---|---|---|---|
| Founder / final call | <set at deploy> | Phone + Signal | 24/7 |
| Engineering on-call | PagerDuty | PagerDuty | rotation |
| Legal counsel | <retained firm> | Email + phone | business hours |
| Sanity support | support@sanity.io | Slack Connect | business hours (Norway TZ) |
| Vercel support | Dashboard | enterprise support | 24/7 (paid plan) |
| Supabase support | Dashboard | pro plan support | business hours |
| Resend support | support@resend.com | Email | business hours |

### Public communication

For incidents affecting more than 5% of users:
1. Update the status page at `status.cyber-eye.in` within 15 min.
2. If the incident exceeds 1 hour, post a customer-facing note via the founder's account.
3. Post-incident: publish a public post-mortem within 5 business days.

---

## Appendix: incident report template

```markdown
# Incident YYYY-MM-DD-NN

**Status:** resolved | ongoing | post-mortem pending
**Severity:** SEV-1 / SEV-2 / SEV-3
**Started:** YYYY-MM-DD HH:MM IST
**Resolved:** YYYY-MM-DD HH:MM IST
**Duration:** Xh Ym
**Impact:** what broke, who saw it, how many

## Timeline (IST)
- HH:MM — first alert (source)
- HH:MM — acknowledged by <on-call>
- HH:MM — mitigation deployed
- HH:MM — resolved

## Root cause


## Fix


## What went well


## What didn't


## Action items
- [ ] short-term (this week)
- [ ] medium-term (this month)
- [ ] systemic (this quarter)
```

---

**Last reviewed:** 21 May 2026. Review quarterly.
