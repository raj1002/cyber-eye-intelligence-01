export const imageManifest = {
  "home-classroom":              { src: "/images/home-classroom.jpg",              alt: "Forensic training classroom with hands-on lab workstations",              width: 1600, height: 900  },
  "home-case-featured":          { src: "/images/home-case-featured.jpg",          alt: "Forensic examiner reviewing redacted case file evidence",                 width: 1200, height: 900  },
  "about-founders":              { src: "/images/about-founders.jpg",              alt: "Cyber-Eye Intelligence founders in the forensic lab",                    width: 960,  height: 1200 },
  "team-r01":                    { src: "/images/team-r01.jpg",                    alt: "Abhishek Mane — Certified Forensic Examiner",                            width: 800,  height: 800  },
  "team-r02":                    { src: "/images/team-r02.jpg",                    alt: "Kiran Pawar — Digital Intelligence Lead",                                 width: 800,  height: 800  },
  "team-r03":                    { src: "/images/team-r03.jpg",                    alt: "Parag Zalke — Managed Security Head",                                     width: 800,  height: 800  },
  "team-r04":                    { src: "/images/team-r04.jpg",                    alt: "Akshad Veer — Forensic Examiner",                                        width: 800,  height: 800  },
  "team-r05":                    { src: "/images/team-r05.jpg",                    alt: "Lakhan Handebag — Academy Director",                                      width: 800,  height: 800  },
  "team-r06":                    { src: "/images/team-r06.jpg",                    alt: "Pooja R. Mankoj — Legal Head",                                           width: 800,  height: 800  },
  "team-r07":                    { src: "/images/team-r07.jpg",                    alt: "Avin Chakravarthy — Marketing Head",                                      width: 800,  height: 800  },
  "team-r08":                    { src: "/images/team-r08.jpg",                    alt: "Madhubala A. Waghmare — Co-Founder & Head of Finance",                    width: 800,  height: 800  },
  "team-r09":                    { src: "/images/team-r09.jpg",                    alt: "Raj K. Shailey — Co-Founder & Head of Business Strategy",                 width: 800,  height: 800  },
  "case-detail-hero":            { src: "/images/case-detail-hero.jpg",            alt: "Forensic evidence table with numbered exhibit bags",                     width: 1920, height: 1080 },
  "case-ce2025-014":             { src: "/images/case-ce2025-014.jpg",             alt: "Mobile device forensic extraction — deleted data recovery",              width: 1000, height: 800  },
  "case-ce2025-008":             { src: "/images/case-ce2025-008.jpg",             alt: "BEC fraud email header analysis across jurisdictions",                   width: 1000, height: 800  },
  "case-ce2025-003":             { src: "/images/case-ce2025-003.jpg",             alt: "Insider threat cloud exfiltration investigation",                        width: 1000, height: 800  },
  "case-ce2024-097":             { src: "/images/case-ce2024-097.jpg",             alt: "Ransomware dwell time analysis timeline",                                width: 1000, height: 800  },
  "case-ce2024-082":             { src: "/images/case-ce2024-082.jpg",             alt: "Geolocation timeline reconstruction for legal proceedings",              width: 1000, height: 800  },
  "case-ce2024-061":             { src: "/images/case-ce2024-061.jpg",             alt: "Microsoft 365 mailbox rule reversal — breach containment",               width: 1000, height: 800  },
  "case-ce2024-048":             { src: "/images/case-ce2024-048.jpg",             alt: "Cell-site triangulation narcotics syndicate investigation",              width: 1000, height: 800  },
  "case-ce2024-032":             { src: "/images/case-ce2024-032.jpg",             alt: "Ministry document leak traced to single endpoint",                      width: 1000, height: 800  },
  "case-ce2023-118":             { src: "/images/case-ce2023-118.jpg",             alt: "Hospital ransomware response — ICU systems restored",                   width: 1000, height: 800  },
  "sector-law-enforcement":      { src: "/images/sector-law-enforcement.jpg",      alt: "Law enforcement digital forensics support",                              width: 960,  height: 1200 },
  "sector-legal-litigation":     { src: "/images/sector-legal-litigation.jpg",     alt: "Legal and litigation digital evidence services",                         width: 960,  height: 1200 },
  "sector-corporate-enterprise": { src: "/images/sector-corporate-enterprise.jpg", alt: "Corporate enterprise internal investigation support",                    width: 960,  height: 1200 },
  "sector-government":           { src: "/images/sector-government.jpg",           alt: "Government agency forensic and intelligence services",                   width: 960,  height: 1200 },
  "sector-bfsi-insurance":       { src: "/images/sector-bfsi-insurance.jpg",       alt: "BFSI and insurance fraud investigation services",                        width: 960,  height: 1200 },
  "insight-featured-hero":       { src: "/images/insight-featured-hero.jpg",       alt: "Featured forensic intelligence insight",                                 width: 1200, height: 960  },
  "article-ios18-apfs":          { src: "/images/article-ios18-apfs.jpg",          alt: "iOS 18 APFS encryption and WhatsApp data recovery",                     width: 1000, height: 600  },
  "article-bec-header":          { src: "/images/article-bec-header.jpg",          alt: "BEC fraud email header forensics workflow",                              width: 1000, height: 600  },
  "article-m365-logs":           { src: "/images/article-m365-logs.jpg",           alt: "Microsoft 365 cloud forensics log retention analysis",                  width: 1000, height: 600  },
  "article-ai-forensics":        { src: "/images/article-ai-forensics.jpg",        alt: "Critical analysis of AI-powered forensics tools",                       width: 1000, height: 600  },
  "article-signal-android":      { src: "/images/article-signal-android.jpg",      alt: "Signal sealed-sender artefact carving on Android 14",                   width: 1000, height: 600  },
  "article-65b-sc":              { src: "/images/article-65b-sc.jpg",              alt: "Supreme Court ruling on Section 65B digital evidence",                  width: 1000, height: 600  },
} as const;

export type ImageSlot = keyof typeof imageManifest;
export function img(slot: ImageSlot) { return imageManifest[slot]; }

// Slug-keyed lookups for dynamic pages
export const caseImageByLabel: Record<string, ImageSlot> = {
  "case · IP theft":   "case-ce2025-014",
  "case · BEC fraud":  "case-ce2025-008",
  "case · insider":    "case-ce2025-003",
  "case · ransomware": "case-ce2024-097",
  "case · custody":    "case-ce2024-082",
  "case · m365":       "case-ce2024-061",
  "case · narcotics":  "case-ce2024-048",
  "case · ministry":   "case-ce2024-032",
  "case · hospital":   "case-ce2023-118",
};

// Derived from case ID: "CE/2025/014" → "case-ce2025-014"
export function caseImageFromId(id: string): ImageSlot | undefined {
  const parts = id.toLowerCase().split("/");
  const key = "case-" + (parts[0] ?? "") + (parts[1] ?? "") + "-" + (parts[2] ?? "");
  return key in imageManifest ? (key as ImageSlot) : undefined;
}

export const sectorImageBySlug: Record<string, ImageSlot> = {
  "law-enforcement":      "sector-law-enforcement",
  "legal-litigation":     "sector-legal-litigation",
  "corporate-enterprise": "sector-corporate-enterprise",
  "government":           "sector-government",
  "bfsi-insurance":       "sector-bfsi-insurance",
};

export const articleImageBySlug: Record<string, ImageSlot> = {
  // InsightsRow / KnowledgeContent label values
  "article · ios 18 acquisitions": "article-ios18-apfs",
  "article · bec headers":         "article-bec-header",
  "article · m365 logs":           "article-m365-logs",
  "article · ai forensics":        "article-ai-forensics",
  "article · signal android":      "article-signal-android",
  "article · § 65b ruling":        "article-65b-sc",
  // Fallback data slugs
  "whatsapp-ios18":       "article-ios18-apfs",
  "bec-header-forensics": "article-bec-header",
  "m365-retention":       "article-m365-logs",
  "ai-forensics-marketing": "article-ai-forensics",
  "signal-android14":     "article-signal-android",
  "65b-sc-ruling":        "article-65b-sc",
  // Sanity slugs (kept in sync with studio)
  "ios18-apfs":           "article-ios18-apfs",
  "bec-header":           "article-bec-header",
  "m365-logs":            "article-m365-logs",
  "ai-forensics":         "article-ai-forensics",
  "signal-android":       "article-signal-android",
  "65b-sc":               "article-65b-sc",
};
