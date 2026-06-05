import { getCaseFiles, getArticles, getWhitepapers, getBlogs } from '@/lib/sanity';
import KnowledgeContent, {
  type KnowledgeCaseFile,
  type KnowledgeArticle,
  type KnowledgeWhitepaper,
  type KnowledgeBlog,
} from './KnowledgeContent';

const FALLBACK_CASES: KnowledgeCaseFile[] = [
  { id: "CE/2025/014", slug: "ce-2025-014", sector: "corporate", label: "Corporate · Mobile", title: "Recovered 14 deleted chats from a wiped iPhone — conviction in 9 months.", sub: "2.4 TB examined · § 65B admitted · Mumbai sessions.", imgLabel: "case · IP theft" },
  { id: "CE/2025/008", slug: "ce-2025-008", sector: "bfsi", label: "BFSI · Email", title: "Traced ₹4.6 cr BEC fraud across 3 jurisdictions in 11 days.", sub: "Attribution to Lagos-based ring · funds frozen.", imgLabel: "case · BEC fraud" },
  { id: "CE/2025/003", slug: "ce-2025-003", sector: "corporate", label: "Corporate · Insider", title: "Identified data exfiltration through personal cloud — termination upheld.", sub: "17 USB events · 2 SaaS exports · labour tribunal accepted.", imgLabel: "case · insider" },
  { id: "CE/2024/097", slug: "ce-2024-097", sector: "corporate", label: "Corporate · Malware", title: "Mapped ransomware dwell time — 41 days. Insurer paid out under coverage.", sub: "Conti-affiliated · attribution upheld in arbitration.", imgLabel: "case · ransomware" },
  { id: "CE/2024/082", slug: "ce-2024-082", sector: "legal", label: "Legal · Mobile", title: "Reconstructed 6-week location timeline in a contested custody matter.", sub: "Geofencing · cell-site verification · family court accepted.", imgLabel: "case · custody" },
  { id: "CE/2024/061", slug: "ce-2024-061", sector: "ngo", label: "NGO · Cloud", title: "Reversed unauthorised mailbox rules — donor data breach contained in 36 h.", sub: "M365 audit log · attribution to compromised contractor.", imgLabel: "case · m365" },
  { id: "CE/2024/048", slug: "ce-2024-048", sector: "law-enforcement", label: "Law Enforcement · Mobile", title: "Cell-site triangulation closed a 9-suspect narcotics syndicate.", sub: "23 devices imaged · 4 burner phones decrypted.", imgLabel: "case · narcotics ring" },
  { id: "CE/2024/032", slug: "ce-2024-032", sector: "government", label: "Government · Insider", title: "Traced a ministry document leak to a single endpoint in 9 days.", sub: "USB telemetry · classified handling · auditor accepted.", imgLabel: "case · ministry leak" },
  { id: "CE/2023/118", slug: "ce-2023-118", sector: "healthcare", label: "Healthcare · Malware", title: "Contained a hospital ransomware attack — restored ICU systems in 18 hours.", sub: "No patient data lost · CERT-In incident filing closed.", imgLabel: "case · hospital" },
];

const FALLBACK_ARTICLES: KnowledgeArticle[] = [
  { type: "Tutorial", readTime: "6 min", date: "Apr 28, 2026", title: "Recovering deleted WhatsApp messages on iOS 18 — what the new APFS encryption changes.", label: "article · ios 18 acquisitions", slug: "whatsapp-ios18" },
  { type: "Field notes", readTime: "8 min", date: "Apr 14, 2026", title: "BEC fraud: a five-step header forensics workflow for in-house counsel.", label: "article · bec headers", slug: "bec-header-forensics" },
  { type: "Reference", readTime: "11 min", date: "Mar 30, 2026", title: "Cloud forensics in M365: which logs actually survive a 90-day retention window?", label: "article · m365 logs", slug: "m365-retention" },
  { type: "Opinion", readTime: "4 min", date: "Mar 22, 2026", title: "Why \"AI-powered forensics\" is mostly marketing — and the two places it isn't.", label: "article · ai forensics", slug: "ai-forensics-marketing" },
  { type: "Tutorial", readTime: "9 min", date: "Mar 10, 2026", title: "Carving Signal sealed-sender artefacts from Android 14 user data.", label: "article · signal android", slug: "signal-android14" },
  { type: "Case law", readTime: "5 min", date: "Feb 28, 2026", title: "SC ruling on § 65B: what it changes for digital evidence in 2026.", label: "article · § 65b ruling", slug: "65b-sc-ruling" },
];

const FALLBACK_WHITEPAPERS: KnowledgeWhitepaper[] = [
  { code: "WP-01", title: "Mobile Forensic Acquisition Standards for Indian Courts", sub: "A practitioner's guide to § 65B compliance across iOS and Android extraction workflows.", year: "2026" },
  { code: "WP-02", title: "AI in Digital Forensics — Promise, Peril and the Admissibility Problem", sub: "Where machine learning helps, where it doesn't, and how to keep the examiner in the loop.", year: "2025" },
  { code: "WP-03", title: "Ransomware Attribution: From Malware to the Indictment", sub: "Tracing a full kill chain — infrastructure, crypto wallets, dark web and cross-border coordination.", year: "2025" },
];

const FALLBACK_BLOGS: KnowledgeBlog[] = [
  { date: "May 12, 2026", title: "What the Bombay HC's WhatsApp admissibility ruling means for your next matter.", readTime: "4 min", slug: "bombay-hc-whatsapp-ruling" },
  { date: "Apr 5, 2026", title: "We trained 200 UP Police cyber-crime investigators. Here's what they didn't know.", readTime: "6 min", slug: "up-police-cyber-training" },
  { date: "Mar 1, 2026", title: "Cellebrite UFED vs. GrayKey in 2026: a practitioner's honest comparison.", readTime: "8 min", slug: "cellebrite-vs-graykey-2026" },
];

export const metadata = {
  title: "Knowledge Centre — Cyber Eye Intelligence",
  description: "Case files, insights, white papers and blog posts from working digital forensic examiners.",
};

export default async function KnowledgePage() {
  const [sanityCases, sanityArticles, sanityWhitepapers, sanityBlogs] = await Promise.all([
    getCaseFiles(),
    getArticles(),
    getWhitepapers(),
    getBlogs(),
  ]);

  const caseFiles: KnowledgeCaseFile[] = sanityCases.length > 0
    ? sanityCases.map((c) => {
        const id = c.ref ?? c._id;
        return {
          id,
          slug: id.toLowerCase().replace(/\//g, "-"),
          sector: c.sector ?? "",
          label: c.label ?? c.sector ?? "",
          title: c.title,
          sub: c.sub ?? "",
          imgLabel: c.imgLabel ?? "case file",
        };
      })
    : FALLBACK_CASES;

  const sanityArticlesWithSlugs = sanityArticles.filter((a) => a.slug?.current);
  const articles: KnowledgeArticle[] = sanityArticlesWithSlugs.length > 0
    ? sanityArticlesWithSlugs.map((a) => ({
        type: a.type ?? "Article",
        readTime: a.readTime ?? "5 min",
        date: a.date ?? (a.publishedAt ? new Date(a.publishedAt).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) : ""),
        title: a.title,
        label: a.label ?? `article · ${a._id}`,
        slug: a.slug!.current,
      }))
    : FALLBACK_ARTICLES;

  const whitepapers: KnowledgeWhitepaper[] = sanityWhitepapers.length > 0
    ? sanityWhitepapers.map((w) => ({
        code: w.code ?? w._id,
        title: w.title,
        sub: w.sub ?? "",
        year: w.year ?? "",
        pdfUrl: w.pdfUrl,
      }))
    : FALLBACK_WHITEPAPERS;

  const sanityBlogsWithSlugs = sanityBlogs.filter((b) => b.slug?.current);
  const blogs: KnowledgeBlog[] = sanityBlogsWithSlugs.length > 0
    ? sanityBlogsWithSlugs.map((b) => ({
        date: b.date ?? (b.publishedAt ? new Date(b.publishedAt).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) : ""),
        title: b.title,
        readTime: b.readTime ?? "5 min",
        slug: b.slug!.current,
      }))
    : FALLBACK_BLOGS;

  return (
    <KnowledgeContent
      caseFiles={caseFiles}
      articles={articles}
      whitepapers={whitepapers}
      blogs={blogs}
    />
  );
}
