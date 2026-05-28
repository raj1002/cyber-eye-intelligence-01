// Content engine: Insights, Blog post, Resources, Glossary, FAQ, Compare

const BlogHubPage = () => (
  <PageFrame title="09 — Insights / Blog Hub" slug="/insights" url="cybereye.com/insights" activeNav="Insights">
    <div style={{padding:'14px 36px', borderBottom:'1.5px dashed var(--ink)', fontSize:13, color:'var(--ink-soft)'}}>
      Home / <b style={{color:'var(--ink)'}}>Insights</b>
    </div>

    <div className="body-pad" style={{position:'relative'}}>
      <h1 className="sk-h sk-h-xl" style={{margin:'0 0 16px'}}>Notes from the lab.</h1>
      <SkLines widths={[80, 60]} />
      <SeoNote style={{top:20, right:36}}>Pillar + cluster content engine. RSS at /rss.xml.</SeoNote>
    </div>

    {/* Categories */}
    <div className="body-pad" style={{paddingTop:0}}>
      <div style={{display:'flex',gap:10, flexWrap:'wrap', marginBottom:24}}>
        {['All','Tutorials','Case Notes','Fraud Trends','Tooling','Law & Evidence','Training'].map((c,i) => (
          <div key={c} className={i===0?'sk-pill sk-pill-fill':'sk-pill'}>{c}</div>
        ))}
      </div>

      {/* Featured */}
      <SkBox style={{padding:0, overflow:'hidden', marginBottom:24}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr'}}>
          <SkImg label="featured article" style={{height:280, borderRadius:0, border:'none', borderRight:'1.5px solid var(--ink)'}} />
          <div style={{padding:28}}>
            <div className="sk-label">Featured · Fraud Trends · 12 min read</div>
            <h2 className="sk-h sk-h-lg" style={{margin:'10px 0'}}>State of UPI Fraud in India, FY 2026</h2>
            <SkLines widths={[100,90,70]} />
            <div style={{display:'flex',alignItems:'center',gap:10,marginTop:18}}>
              <div className="sk-img" style={{width:32,height:32,borderRadius:'50%',fontSize:8}}>au</div>
              <div style={{fontSize:13}}>By A. Examiner · Principal Forensic Analyst</div>
            </div>
          </div>
        </div>
      </SkBox>

      {/* Article grid */}
      <div className="grid-3">
        {[
          'How to Preserve WhatsApp Evidence Before Wiping a Phone',
          '§ 65B Certificate: Filling It So It Survives Cross-Exam',
          'M365 Audit Logs — What Stays, What Vanishes',
          'Insider Threat: 7 Telltale Patterns in DLP Data',
          'AI-Generated Voice Cloning — Forensic Detection',
          'Crypto Tracing: Following USDT Across Bridges',
          'Email Header Forensics: A 90-Second Walkthrough',
          'Cellebrite vs Magnet AXIOM — Field Notes',
          'Training Curriculum for Cyber Cell Officers',
        ].map((t,i) => (
          <div key={i}>
            <SkImg label="thumb" style={{height:130, marginBottom:10}} />
            <div className="sk-label">Category · 6 min</div>
            <h4 style={{margin:'6px 0', fontWeight:'normal', fontSize:16, lineHeight:1.25}}>{t}</h4>
            <SkLines widths={[90, 70]} />
            <div style={{fontSize:11, color:'var(--ink-soft)', marginTop:8}}>By Author · Mar 12, 2026</div>
          </div>
        ))}
      </div>

      <div style={{display:'flex',justifyContent:'center',gap:8,marginTop:32}}>
        {['← Prev','1','2','3','4','Next →'].map((p,i) => (
          <div key={p} className={i===1?'sk-pill sk-pill-fill':'sk-pill'} style={{fontSize:13}}>{p}</div>
        ))}
      </div>
    </div>

    <div style={{height:24}}></div>
  </PageFrame>
);

const BlogPostPage = () => (
  <PageFrame title="10 — Blog Post (template)" slug="/insights/[slug]" url="cybereye.com/insights/whatsapp-evidence-preservation" activeNav="Insights">
    <div style={{padding:'14px 36px', borderBottom:'1.5px dashed var(--ink)', fontSize:13, color:'var(--ink-soft)'}}>
      Home / Insights / Tutorials / <b style={{color:'var(--ink)'}}>Preserving WhatsApp Evidence</b>
    </div>

    <div className="body-pad" style={{position:'relative', maxWidth:'none'}}>
      <div style={{maxWidth: 760, margin:'0 auto'}}>
        <div className="sk-label">Tutorial · 8 min read · Updated Apr 4, 2026</div>
        <h1 className="sk-h sk-h-xl" style={{margin:'14px 0'}}>How to preserve WhatsApp<br/>evidence before wiping<br/>a phone.</h1>
        <div style={{display:'flex',alignItems:'center',gap:12, margin:'18px 0'}}>
          <div className="sk-img" style={{width:42,height:42,borderRadius:'50%',fontSize:8}}>au</div>
          <div>
            <div style={{fontSize:14}}>A. Examiner</div>
            <div className="sk-label">Principal Forensic Analyst · EnCE, GCFA, CHFI · 12 yrs</div>
          </div>
          <div style={{marginLeft:'auto', display:'flex', gap:8}}>
            <div className="sk-pill" style={{fontSize:12}}>Share</div>
            <div className="sk-pill" style={{fontSize:12}}>Save</div>
          </div>
        </div>
      </div>
      <SeoNote style={{top:20, right:36}}>Article schema · Person schema for author w/ credentials.</SeoNote>
      <AiNote style={{top:48, right:36}}>Bylined examiner + cert chain → LLM citation trust.</AiNote>
    </div>

    <div className="body-pad" style={{paddingTop:0}}>
      <div style={{display:'grid', gridTemplateColumns:'200px 1fr 200px', gap:32, maxWidth:1100, margin:'0 auto'}}>
        <div>
          <div className="sk-label" style={{marginBottom:10}}>Contents</div>
          <ul style={{margin:0, paddingLeft:18, fontSize:13, lineHeight:1.7, color:'var(--ink-soft)'}}>
            <li>TL;DR</li>
            <li>Why timing matters</li>
            <li>Step 1 — Faraday isolate</li>
            <li>Step 2 — Image acquisition</li>
            <li>Step 3 — Hash & document</li>
            <li>Common pitfalls</li>
            <li>§ 65B language to use</li>
            <li>References</li>
          </ul>
        </div>

        <div className="stack-lg">
          <SkBox style={{padding:18, background:'var(--paper-dark)'}}>
            <div className="sk-label" style={{marginBottom:8}}>TL;DR</div>
            <SkLines widths={[100,90]} />
          </SkBox>
          <SkImg label="step-by-step diagram" style={{height: 220}} />
          <SkLines widths={[100,100,90,80,100,75]} />
          <h2 className="sk-h" style={{margin:'8px 0'}}>Step 1 — Faraday isolate</h2>
          <SkLines widths={[100,100,90,70]} />
          <SkBox style={{padding:18, background:'var(--ink)', color:'var(--paper)', fontFamily:'JetBrains Mono, monospace', fontSize:12}}>
            <div># compute SHA-256 of the WhatsApp backup</div>
            <div>$ shasum -a 256 msgstore.db.crypt15</div>
            <div>a31f...e9 msgstore.db.crypt15</div>
          </SkBox>
          <SkLines widths={[100,90,80]} />
          <h2 className="sk-h" style={{margin:'8px 0'}}>§ 65B language to use</h2>
          <SkLines widths={[100,90,70]} />
        </div>

        <div style={{position:'sticky', top: 0}}>
          <SkBox fill style={{padding:16, marginBottom:14}}>
            <div style={{color:'var(--paper)', fontSize:14, marginBottom:10}}>Need help on a live case?</div>
            <div style={{background:'var(--paper)', color:'var(--ink)', padding:'6px 12px', borderRadius:6, fontSize:13, textAlign:'center'}}>Open a case →</div>
          </SkBox>
          <SkBox style={{padding:14}}>
            <div className="sk-label" style={{marginBottom:8}}>Related</div>
            <div className="stack">
              {['Cellebrite UFED extraction modes','iCloud backup forensics','§ 65B template (PDF)'].map(t => (
                <div key={t} style={{fontSize:13, lineHeight:1.3}}>{t}</div>
              ))}
            </div>
          </SkBox>
        </div>
      </div>
    </div>

    {/* Author bio */}
    <div className="body-pad" style={{position:'relative'}}>
      <div style={{maxWidth:760, margin:'0 auto'}}>
        <SkBox style={{padding:20, display:'grid', gridTemplateColumns:'60px 1fr', gap:16, alignItems:'start'}}>
          <SkImg label="" style={{width:60, height:60, borderRadius:'50%'}}/>
          <div>
            <div style={{fontSize:16}}>About A. Examiner</div>
            <div className="sk-label" style={{marginBottom:8}}>Principal Forensic Analyst · EnCE · GCFA · CHFI</div>
            <SkLines widths={[100,80]} />
            <div style={{display:'flex',gap:8,marginTop:10,fontSize:12}}>
              <span>↗ LinkedIn</span><span>↗ Publications</span><span>↗ Talks</span>
            </div>
          </div>
        </SkBox>
      </div>
      <AiNote style={{bottom:20, right:36}}>Author Person schema with sameAs links.</AiNote>
    </div>

    <div style={{height:24}}></div>
  </PageFrame>
);

// ---------- RESOURCES ----------
const ResourcesHubPage = () => (
  <PageFrame title="11 — Resources Hub" slug="/resources" url="cybereye.com/resources" activeNav="Insights">
    <div style={{padding:'14px 36px', borderBottom:'1.5px dashed var(--ink)', fontSize:13, color:'var(--ink-soft)'}}>
      Home / <b style={{color:'var(--ink)'}}>Resources</b>
    </div>

    <div className="body-pad" style={{position:'relative'}}>
      <h1 className="sk-h sk-h-xl" style={{margin:'0 0 16px'}}>Reports, guides<br/>& sample exhibits.</h1>
      <SkLines widths={[70]} />
      <SeoNote style={{top:20, right:36}}>Lead-magnet hub. Each guide ranks "how to X".</SeoNote>
    </div>

    <div className="body-pad" style={{paddingTop:0}}>
      <div style={{display:'flex',gap:10,flexWrap:'wrap',marginBottom:20}}>
        {['All','Fraud Reports','Pillar Guides','SOPs','Templates','Webinars','Sample Reports'].map((c,i) => (
          <div key={c} className={i===0?'sk-pill sk-pill-fill':'sk-pill'}>{c}</div>
        ))}
      </div>

      <div className="grid-3">
        {[
          {t:'India Fraud Report — FY 2026', l:'Fraud Report · 48 pp'},
          {t:'§ 65B Certificate Template (Annotated)', l:'Template · DOCX'},
          {t:'The Complete Guide to Mobile Forensics', l:'Pillar Guide · 14k words'},
          {t:'First Responder Checklist for Police', l:'SOP · 2 pages'},
          {t:'Sample Forensic Report (Redacted)', l:'PDF · Mobile case'},
          {t:'Webinar: Deepfake Detection in 2026', l:'Video · 42 min'},
        ].map(r => (
          <SkBox key={r.t} style={{padding:0, overflow:'hidden'}}>
            <SkImg label="resource cover" style={{height:160, borderRadius:0, border:'none', borderBottom:'1.5px solid var(--ink)'}}/>
            <div style={{padding:16}}>
              <div className="sk-label">{r.l}</div>
              <h4 style={{margin:'6px 0', fontWeight:'normal', fontSize:17, lineHeight:1.25}}>{r.t}</h4>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
                <span style={{fontSize:13}}>Download →</span>
                <span className="sk-label">Free</span>
              </div>
            </div>
          </SkBox>
        ))}
      </div>
    </div>

    <div style={{height:24}}></div>
  </PageFrame>
);

// ---------- GLOSSARY ----------
const GlossaryPage = () => (
  <PageFrame title="12 — Glossary" slug="/glossary" url="cybereye.com/glossary" activeNav="Insights">
    <div style={{padding:'14px 36px', borderBottom:'1.5px dashed var(--ink)', fontSize:13, color:'var(--ink-soft)'}}>
      Home / <b style={{color:'var(--ink)'}}>Glossary</b>
    </div>

    <div className="body-pad" style={{position:'relative'}}>
      <h1 className="sk-h sk-h-xl" style={{margin:'0 0 16px'}}>Digital forensics<br/>glossary.</h1>
      <SkLines widths={[60]} />
      <AiNote style={{top:20, right:36}}>★ Critical for AI / LLM discoverability — short definition chunks.</AiNote>
    </div>

    <div className="body-pad" style={{paddingTop:0}}>
      <SkBox style={{padding:14, marginBottom: 24, display:'flex', gap:8, flexWrap:'wrap', justifyContent:'center'}}>
        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(l => (
          <div key={l} style={{width:28,height:28,display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid var(--ink)',borderRadius:4,fontSize:13}}>{l}</div>
        ))}
      </SkBox>

      <div className="grid-2">
        {[
          {t:'Chain of Custody', d:'A documented, unbroken trail showing who handled an item of digital evidence, when, and what was done to it — required for court admissibility.'},
          {t:'Write-Blocker', d:'A hardware or software device that allows read-only access to a storage medium so the original evidence cannot be altered during examination.'},
          {t:'Hash Value', d:'A unique alphanumeric fingerprint (e.g. SHA-256) of a file or disk image, used to prove the evidence has not been modified.'},
          {t:'Section 65B Certificate', d:'A certificate under the Indian Evidence Act that authenticates electronic records as admissible evidence in court.'},
          {t:'Faraday Bag', d:'A signal-blocking enclosure used to isolate a seized mobile device from cellular, Wi-Fi and Bluetooth networks during transport.'},
          {t:'Indicator of Compromise (IOC)', d:'A piece of forensic data — file hash, IP address, domain — that identifies malicious activity on a system or network.'},
        ].map(term => (
          <SkBox key={term.t} style={{padding:16}}>
            <h3 style={{margin:'0 0 6px', fontSize:18, fontWeight:'normal'}}>{term.t}</h3>
            <div style={{fontSize:14, color:'var(--ink-soft)', lineHeight:1.5}}>{term.d}</div>
            <div style={{display:'flex',gap:8,marginTop:10,alignItems:'center'}}>
              <span style={{fontSize:13}}>Full entry →</span>
              <span className="sk-label">Related: 4 terms</span>
            </div>
          </SkBox>
        ))}
      </div>

      <SkBox style={{padding:18, marginTop:24, background:'var(--ai-soft)', border:'1.5px solid var(--ai)'}}>
        <div className="sk-label" style={{color:'var(--ai)', marginBottom:6}}>Why a glossary?</div>
        <div style={{fontSize:14}}>
          Each term gets its own page (/glossary/[term]) with DefinedTerm schema. Tight, citation-shaped paragraphs. Auto-linked from every blog post on first mention.
        </div>
      </SkBox>
    </div>

    <div style={{height:24}}></div>
  </PageFrame>
);

// ---------- FAQ HUB ----------
const FaqPage = () => (
  <PageFrame title="13 — FAQ" slug="/faq" url="cybereye.com/faq" activeNav="">
    <div style={{padding:'14px 36px', borderBottom:'1.5px dashed var(--ink)', fontSize:13, color:'var(--ink-soft)'}}>
      Home / <b style={{color:'var(--ink)'}}>FAQ</b>
    </div>

    <div className="body-pad" style={{position:'relative'}}>
      <h1 className="sk-h sk-h-xl" style={{margin:'0 0 16px'}}>Questions, answered.</h1>
      <SkLines widths={[60]} />
      <SeoNote style={{top:20, right:36}}>FAQPage schema · "People Also Ask" capture.</SeoNote>
      <AiNote style={{top:48, right:36}}>Q&A blocks LLMs surface verbatim.</AiNote>
    </div>

    <div className="body-pad" style={{paddingTop:0}}>
      <div style={{display:'grid', gridTemplateColumns:'220px 1fr', gap:32}}>
        <div>
          <div className="sk-label" style={{marginBottom:10}}>Topics</div>
          <ul style={{listStyle:'none', padding:0, margin:0, fontSize:14, lineHeight:1.9}}>
            <li><b>· Casework</b></li>
            <li>· Evidence & admissibility</li>
            <li>· Mobile forensics</li>
            <li>· Cloud forensics</li>
            <li>· Fraud investigation</li>
            <li>· Training</li>
            <li>· Pricing & turnaround</li>
            <li>· Confidentiality</li>
          </ul>
        </div>
        <div className="stack">
          <h2 className="sk-h" style={{margin:'0 0 6px'}}>Evidence & admissibility</h2>
          {[
            'Are your forensic reports admissible in Indian courts?',
            'Do you provide § 65B certification?',
            'Can your examiners testify as expert witnesses?',
          ].map(q => (
            <SkBox key={q} style={{padding:'14px 18px'}}>
              <div style={{display:'flex',justifyContent:'space-between'}}>
                <span><b>Q:</b> {q}</span><span style={{color:'var(--muted)', fontSize:22}}>–</span>
              </div>
              <div style={{fontSize:14, marginTop:8, color:'var(--ink-soft)', lineHeight:1.5}}>
                <b>A:</b> A short, complete 40–80 word answer that directly addresses the question. Featured-snippet shape.
              </div>
            </SkBox>
          ))}
          <h2 className="sk-h" style={{margin:'18px 0 6px'}}>Mobile forensics</h2>
          {[
            'Can you recover deleted WhatsApp / Signal messages?',
            'Will examination damage or wipe the phone?',
            'Can you unlock iPhone / Samsung devices?',
          ].map(q => (
            <SkBox key={q} style={{padding:'14px 18px', display:'flex', justifyContent:'space-between'}}>
              <span><b>Q:</b> {q}</span><span style={{color:'var(--muted)', fontSize:22}}>+</span>
            </SkBox>
          ))}
        </div>
      </div>
    </div>

    <div style={{height:24}}></div>
  </PageFrame>
);

// ---------- COMPARE / VS ----------
const ComparePage = () => (
  <PageFrame title="14 — Comparison (template)" slug="/compare/[vs]" url="cybereye.com/compare/in-house-vs-outsourced-forensics" activeNav="">
    <div style={{padding:'14px 36px', borderBottom:'1.5px dashed var(--ink)', fontSize:13, color:'var(--ink-soft)'}}>
      Home / Compare / <b style={{color:'var(--ink)'}}>In-house lab vs. outsourced forensics</b>
    </div>

    <div className="body-pad" style={{position:'relative'}}>
      <h1 className="sk-h sk-h-xl" style={{margin:'0 0 16px'}}>In-house lab vs.<br/>outsourced forensics:<br/>which fits?</h1>
      <SkLines widths={[80, 60]} />
      <SeoNote style={{top:20, right:36}}>Captures "X vs Y" intent — high commercial value.</SeoNote>
    </div>

    <div className="body-pad" style={{paddingTop:0}}>
      <SkBox style={{padding:0, overflow:'hidden'}}>
        <div style={{display:'grid', gridTemplateColumns:'1.5fr 1fr 1fr', borderBottom:'1.5px solid var(--ink)'}}>
          <div style={{padding:14, fontSize:13, color:'var(--ink-soft)'}}>Dimension</div>
          <div style={{padding:14, borderLeft:'1.5px solid var(--ink)', fontWeight:'bold'}}>In-house lab</div>
          <div style={{padding:14, borderLeft:'1.5px solid var(--ink)', background:'var(--paper-dark)', fontWeight:'bold'}}>Outsourced (us)</div>
        </div>
        {['Setup cost','Time to first case','Tool licensing (Cellebrite, AXIOM)','Examiner availability','Court testimony','Confidentiality','Case backlog flexibility'].map(row => (
          <div key={row} style={{display:'grid', gridTemplateColumns:'1.5fr 1fr 1fr', borderBottom:'1.5px dashed var(--ink)'}}>
            <div style={{padding:14, fontSize:14}}>{row}</div>
            <div style={{padding:14, borderLeft:'1.5px solid var(--ink)', fontSize:14}}><SkLines widths={[80]}/></div>
            <div style={{padding:14, borderLeft:'1.5px solid var(--ink)', background:'var(--paper-dark)', fontSize:14}}><SkLines widths={[80]}/></div>
          </div>
        ))}
      </SkBox>
    </div>

    <div className="body-pad" style={{paddingTop:8}}>
      <h2 className="sk-h sk-h-lg" style={{marginBottom:18}}>Which should you choose?</h2>
      <div className="grid-2">
        <SkBox style={{padding:20}}>
          <div className="sk-label" style={{marginBottom:8}}>Pick in-house if…</div>
          <SkLines widths={[100, 80, 60]}/>
        </SkBox>
        <SkBox style={{padding:20, background:'var(--paper-dark)'}}>
          <div className="sk-label" style={{marginBottom:8}}>Pick outsourced if…</div>
          <SkLines widths={[100, 80, 60]}/>
        </SkBox>
      </div>
    </div>

    <div style={{height:24}}></div>
  </PageFrame>
);

Object.assign(window, { BlogHubPage, BlogPostPage, ResourcesHubPage, GlossaryPage, FaqPage, ComparePage });
