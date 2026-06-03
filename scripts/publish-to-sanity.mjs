#!/usr/bin/env node
/**
 * publish-to-sanity.mjs
 *
 * Publishes a content-pipeline markdown article to Sanity as an article document.
 * Reads frontmatter fields and maps them to the Sanity article schema.
 * Body content is NOT sent (it remains in the markdown file as source of truth).
 * The article card (title, date, type, label, slug) is all that's needed for
 * the Knowledge Centre Insights tab.
 *
 * Usage (from repo root):
 *   node scripts/publish-to-sanity.mjs content-pipeline/your-article.md
 *   node scripts/publish-to-sanity.mjs content-pipeline/  ← publishes all articles in folder
 *
 * Requires SANITY_API_TOKEN in project/nextjs-template/.env.local
 */

import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { resolve, join, basename, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __dirname = dirname(fileURLToPath(import.meta.url));
// Resolve @sanity/client from the Next.js project's node_modules
const require = createRequire(resolve(__dirname, '../project/nextjs-template/node_modules/@sanity/client/package.json'));
const { createClient } = require('@sanity/client');

// ── Config ──────────────────────────────────────────────────────────────────

const PROJECT_ID = 'f36piw8r';
const DATASET    = 'production';
const API_VER    = '2024-01-01';

// ── Load token from .env.local ───────────────────────────────────────────────

function loadEnvLocal() {
  const envPath = resolve(process.cwd(), 'project/nextjs-template/.env.local');
  if (!existsSync(envPath)) {
    console.error('❌  .env.local not found at', envPath);
    console.error('    Add SANITY_API_TOKEN=sk... to project/nextjs-template/.env.local');
    process.exit(1);
  }
  const lines = readFileSync(envPath, 'utf8').split('\n');
  for (const line of lines) {
    const [key, ...rest] = line.split('=');
    if (key && rest.length) process.env[key.trim()] = rest.join('=').trim();
  }
}

loadEnvLocal();

const token = process.env.SANITY_API_TOKEN;
if (!token || token === '') {
  console.error('❌  SANITY_API_TOKEN is empty. Add it to project/nextjs-template/.env.local');
  process.exit(1);
}

const client = createClient({ projectId: PROJECT_ID, dataset: DATASET, apiVersion: API_VER, token, useCdn: false });

// ── Frontmatter parser ───────────────────────────────────────────────────────

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const yaml = match[1];
  const result = {};
  let currentKey = null;
  let inArray = false;

  for (const raw of yaml.split('\n')) {
    const line = raw.trimEnd();
    // Array item
    if (inArray && line.match(/^  - /)) {
      result[currentKey].push(line.replace(/^  - ["']?/, '').replace(/["']?\s*$/, ''));
      continue;
    }
    inArray = false;
    // Key: value
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (!kv) continue;
    const [, key, val] = kv;
    currentKey = key;
    if (val === '' || val === null) {
      result[key] = [];
      inArray = true;
    } else {
      result[key] = val.replace(/^["']/, '').replace(/["']$/, '');
    }
  }
  return result;
}

// ── Read and compute word count ──────────────────────────────────────────────

function estimateReadTime(content) {
  const body = content.replace(/^---[\s\S]*?---\n/, '');
  const words = body.split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min`;
}

// ── Publish one article ──────────────────────────────────────────────────────

async function publishArticle(filePath) {
  const absPath = resolve(process.cwd(), filePath);
  const content  = readFileSync(absPath, 'utf8');
  const fm       = parseFrontmatter(content);

  if (!fm.slug) {
    const name = basename(filePath, '.md');
    fm.slug = name;
  }
  if (!fm.title) {
    console.error(`❌  ${filePath}: missing 'title' in frontmatter`);
    return false;
  }

  const docId = `pipeline-${fm.slug}`;

  const doc = {
    _type:        'article',
    _id:          docId,
    title:        fm.title,
    slug:         { _type: 'slug', current: fm.slug },
    type:         fm.type         ?? 'Guide',
    readTime:     fm.readTime     ?? estimateReadTime(content),
    date:         fm.date         ?? new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
    label:        fm.label        ?? `article · ${fm.slug}`,
    publishedAt:  fm.publishedAt  ?? new Date().toISOString(),
    seoTitle:     fm.seoTitle     ?? fm.title,
    seoDescription: fm.seoDescription ?? '',
  };

  try {
    await client.createOrReplace(doc);
    console.log(`✅  Published: ${fm.title}`);
    console.log(`    Slug:  ${fm.slug}`);
    console.log(`    Label: ${doc.label}`);
    console.log(`    ID:    ${docId}`);
    return true;
  } catch (err) {
    console.error(`❌  Failed to publish ${filePath}:`, err.message);
    return false;
  }
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const arg = process.argv[2];
  if (!arg) {
    console.error('Usage: node scripts/publish-to-sanity.mjs <file.md | directory/>');
    process.exit(1);
  }

  const absArg = resolve(process.cwd(), arg);
  const stat    = statSync(absArg, { throwIfNoEntry: false });

  if (!stat) {
    console.error(`❌  Path not found: ${arg}`);
    process.exit(1);
  }

  let files = [];

  if (stat.isDirectory()) {
    files = readdirSync(absArg)
      .filter((f) => f.endsWith('.md') && f !== 'RULEBOOK.md')
      .map((f) => join(arg, f));
    console.log(`\n📂  Publishing ${files.length} articles from ${arg}\n`);
  } else {
    files = [arg];
  }

  let ok = 0, fail = 0;
  for (const f of files) {
    const success = await publishArticle(f);
    success ? ok++ : fail++;
  }

  console.log(`\n─────────────────────────────────`);
  console.log(`✅  ${ok} published   ❌  ${fail} failed`);
  console.log(`\nOpen Sanity Studio to review drafts:`);
  console.log(`  https://cyber-eye-intelligence.sanity.studio/`);
  console.log(`─────────────────────────────────\n`);
}

main().catch((e) => { console.error(e); process.exit(1); });
