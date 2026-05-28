// Sitemap overview — IA for a digital forensics & investigation agency

const SitemapPage = () => (
  <div className="page" style={{width: 1400}}>
    <div className="page-title-bar">
      <h2>Sitemap & Information Architecture</h2>
      <div className="meta">SEO + AI discoverability map · 26 page types</div>
    </div>
    <div className="page-frame" style={{padding: '32px 36px 40px'}}>
      <div style={{display:'flex',gap:18,marginBottom:24,flexWrap:'wrap',alignItems:'center'}}>
        <span className="sk-pill"><span style={{width:10,height:10,background:'var(--ink)',borderRadius:2}}></span> Primary page</span>
        <span className="sk-pill"><span style={{width:10,height:10,background:'var(--paper-dark)',border:'1px solid var(--ink)',borderRadius:2}}></span> Template / dynamic</span>
        <span className="sk-pill" style={{background:'var(--accent-soft)',borderColor:'var(--accent)',color:'var(--accent)'}}>SEO-critical</span>
        <span className="sk-pill" style={{background:'var(--ai-soft)',borderColor:'var(--ai)',color:'var(--ai)'}}>AI / LLM discoverability</span>
      </div>

      <div className="flex-col gap-4">
        <div style={{display:'flex',justifyContent:'center'}}>
          <div className="sitemap-node primary" style={{fontSize:16,padding:'10px 22px'}}>/ Homepage</div>
        </div>
        <div style={{display:'flex',justifyContent:'center',color:'var(--muted)'}}>│</div>

        {/* 5 top-level hubs */}
        <div className="grid-4" style={{gap: 14, gridTemplateColumns: 'repeat(5, 1fr)'}}>
          {[
            {l:'Services Hub', s:'/services', cls:'primary'},
            {l:'Sectors Hub', s:'/sectors', cls:'primary'},
            {l:'Case Files', s:'/case-files', cls:'primary'},
            {l:'Training', s:'/training', cls:'primary'},
            {l:'Insights / Blog', s:'/insights', cls:'primary'},
          ].map(n => (
            <div key={n.l} className="flex-col gap-2" style={{alignItems:'center'}}>
              <div className={`sitemap-node ${n.cls}`}>{n.l}</div>
              <div style={{fontFamily:'JetBrains Mono, monospace', fontSize:10, color:'var(--muted)'}}>{n.s}</div>
            </div>
          ))}
        </div>

        {/* Templates */}
        <div className="grid-4" style={{gap: 14, gridTemplateColumns: 'repeat(5, 1fr)', marginTop: 4}}>
          <div className="flex-col gap-2" style={{alignItems:'center'}}>
            <div className="sitemap-node template">/services/[slug]</div>
            <div className="sk-label">7 service pages</div>
            <div style={{display:'flex',gap:4,flexWrap:'wrap',justifyContent:'center'}}>
              <span className="seo-tag">Service schema</span>
              <span className="seo-tag">FAQ</span>
            </div>
          </div>
          <div className="flex-col gap-2" style={{alignItems:'center'}}>
            <div className="sitemap-node template">/sectors/[slug]</div>
            <div className="sk-label">5 sector pages</div>
            <div style={{display:'flex',gap:4,flexWrap:'wrap',justifyContent:'center'}}>
              <span className="seo-tag">Long-tail</span>
            </div>
          </div>
          <div className="flex-col gap-2" style={{alignItems:'center'}}>
            <div className="sitemap-node template">/case-files/[slug]</div>
            <div className="sk-label">Outcome proofs</div>
            <div style={{display:'flex',gap:4,flexWrap:'wrap',justifyContent:'center'}}>
              <span className="seo-tag">CaseStudy schema</span>
            </div>
          </div>
          <div className="flex-col gap-2" style={{alignItems:'center'}}>
            <div className="sitemap-node template">/training/[course]</div>
            <div className="sk-label">Course catalogue</div>
            <div style={{display:'flex',gap:4,flexWrap:'wrap',justifyContent:'center'}}>
              <span className="seo-tag">Course schema</span>
            </div>
          </div>
          <div className="flex-col gap-2" style={{alignItems:'center'}}>
            <div className="sitemap-node template">/insights/[slug]</div>
            <div className="sk-label">Article template</div>
            <div style={{display:'flex',gap:4,flexWrap:'wrap',justifyContent:'center'}}>
              <span className="seo-tag">Article schema</span>
              <span className="ai-tag">Citable</span>
            </div>
          </div>
        </div>

        {/* Secondary */}
        <div style={{marginTop: 18, paddingTop: 18, borderTop: '1.5px dashed var(--ink)'}}>
          <div className="sk-label" style={{marginBottom:14}}>Secondary / supporting</div>
          <div className="grid-4" style={{gap: 14}}>
            <div className="sitemap-node">/about</div>
            <div className="sitemap-node">/team / examiners</div>
            <div className="sitemap-node">/lab-capabilities</div>
            <div className="sitemap-node">/expert-witness</div>
            <div className="sitemap-node">/careers</div>
            <div className="sitemap-node">/engagement-models</div>
            <div className="sitemap-node">/contact</div>
            <div className="sitemap-node">/locations</div>
            <div className="sitemap-node template">/locations/[city]</div>
            <div className="sitemap-node">/testimonials</div>
            <div className="sitemap-node">/press</div>
            <div className="sitemap-node">/accreditations</div>
          </div>
        </div>

        {/* SEO-only */}
        <div style={{marginTop: 14}}>
          <div className="sk-label" style={{marginBottom:14, color:'var(--accent)'}}>SEO-only content</div>
          <div className="grid-4" style={{gap: 14}}>
            <div className="sitemap-node seo">/resources (sample reports)</div>
            <div className="sitemap-node seo">/resources/[guide]</div>
            <div className="sitemap-node seo">/compare/[vs]</div>
            <div className="sitemap-node seo">/fraud-reports</div>
          </div>
        </div>

        {/* AI discoverability */}
        <div style={{marginTop: 14}}>
          <div className="sk-label" style={{marginBottom:14, color:'var(--ai)'}}>AI / LLM discoverability</div>
          <div className="grid-4" style={{gap: 14}}>
            <div className="sitemap-node ai">/glossary</div>
            <div className="sitemap-node ai">/glossary/[term]</div>
            <div className="sitemap-node ai">/faq</div>
            <div className="sitemap-node ai">/llms.txt + /llms-full.txt</div>
          </div>
        </div>

        {/* Utility */}
        <div style={{marginTop: 14}}>
          <div className="sk-label" style={{marginBottom:14}}>Utility / Legal</div>
          <div className="grid-4" style={{gap: 14}}>
            <div className="sitemap-node">/search</div>
            <div className="sitemap-node">/404</div>
            <div className="sitemap-node">/privacy</div>
            <div className="sitemap-node">/chain-of-custody-policy</div>
            <div className="sitemap-node">/terms</div>
            <div className="sitemap-node">/sitemap.xml</div>
            <div className="sitemap-node">/robots.txt</div>
            <div className="sitemap-node">/rss.xml</div>
          </div>
        </div>
      </div>

      {/* Rationale */}
      <div className="grid-2" style={{marginTop: 36, gap: 20}}>
        <SkBox style={{padding: 18}}>
          <div className="sk-label" style={{color:'var(--accent)', marginBottom:10}}>Why these pages — Google SEO</div>
          <ul style={{margin:0, paddingLeft:20, lineHeight:1.55, fontSize:14}}>
            <li><b>Hub & spoke:</b> Services / Sectors / Training hubs each link to detail pages → topical authority.</li>
            <li><b>Long-tail capture:</b> "mobile forensics for police", "insurance fraud investigation", "court-admissible digital evidence" live on sector and service pages.</li>
            <li><b>E-E-A-T:</b> Examiner bios with credentials (EnCE, GCFA, CHFI, CFCE), Case Files with measurable outcomes, Expert Witness page.</li>
            <li><b>Local SEO:</b> /locations/[city] pages — high intent ("digital forensics lab in [city]") with NAP + LocalBusiness schema.</li>
            <li><b>Training schema:</b> /training/[course] pages use Course + Event schema → Google for Education results.</li>
            <li><b>Comparison pages:</b> "in-house lab vs outsourced", "EnCase vs Cellebrite" capture vendor-research intent.</li>
            <li><b>Schema:</b> Organization, Service, Course, Event, Article, FAQPage, BreadcrumbList, Review, Person, JobPosting.</li>
          </ul>
        </SkBox>
        <SkBox style={{padding: 18}}>
          <div className="sk-label" style={{color:'var(--ai)', marginBottom:10}}>Why these pages — AI / LLM discoverability</div>
          <ul style={{margin:0, paddingLeft:20, lineHeight:1.55, fontSize:14}}>
            <li><b>/llms.txt + /llms-full.txt:</b> machine-readable site index for ChatGPT, Perplexity, Claude.</li>
            <li><b>Glossary:</b> tight definitions of forensic terms (chain of custody, write-blocker, hash, IOC) — citation chunks.</li>
            <li><b>FAQ pages:</b> Q&A format LLMs surface verbatim ("Is WhatsApp data recoverable?").</li>
            <li><b>Clean semantic HTML:</b> one H1, structured H2/H3, descriptive anchor text.</li>
            <li><b>First-party data:</b> annual fraud reports, sector threat briefs — unique citation material.</li>
            <li><b>Examiner bios w/ credentials:</b> LLMs weight named, certified experts.</li>
            <li><b>Stable, descriptive URLs:</b> /services/mobile-forensics &gt; /s/12.</li>
          </ul>
        </SkBox>
      </div>
    </div>
  </div>
);

window.SitemapPage = SitemapPage;
