// Core pages: Home, About, Services Hub, Service Detail (Mobile Forensics)

const HomePage = () => (
  <PageFrame title="01 — Homepage" slug="/" url="cybereye.com" activeNav="">
    {/* Hero */}
    <div className="body-pad" style={{paddingBottom: 28, position:'relative'}}>
      <div style={{display:'grid', gridTemplateColumns:'1.3fr 1fr', gap: 40, alignItems:'center'}}>
        <div className="stack-lg">
          <SeoTag>H1 · primary keyword</SeoTag>
          <h1 className="sk-h sk-h-xl">Digital forensics<br/>that holds up<br/>in court.</h1>
          <SkLines widths={[88, 75]} />
          <div style={{display:'flex',gap:12, marginTop: 6}}>
            <div className="sk-pill sk-pill-fill">Open a case →</div>
            <div className="sk-pill">Request a consult</div>
          </div>
          <div style={{display:'flex',gap:18,marginTop:18,alignItems:'center',fontSize:12,color:'var(--ink-soft)'}}>
            <span>Court-admissible reports</span>
            <span>Chain of custody · ISO 17025-aligned</span>
            <span>24/7 incident line</span>
          </div>
        </div>
        <SkImg label="hero · evidence locker / forensic workstation" style={{height: 280}} />
      </div>
      <SeoNote style={{top: 20, right: 36}}>One H1 with primary keyword + outcome promise.</SeoNote>
    </div>

    {/* Logo bar */}
    <div style={{padding:'16px 36px', borderTop:'1.5px dashed var(--ink)', borderBottom:'1.5px dashed var(--ink)'}}>
      <div className="sk-label" style={{marginBottom:10}}>Trusted by police, prosecutors & enterprise legal teams</div>
      <div className="grid-4" style={{gap:14}}>
        {[1,2,3,4,5,6,7,8].map(i => (
          <div key={i} className="sk-img" style={{height: 36, fontSize:9}}>agency / firm logo</div>
        ))}
      </div>
    </div>

    {/* Services preview */}
    <div className="body-pad" style={{position:'relative'}}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom: 18}}>
        <h2 className="sk-h sk-h-lg">Forensic services</h2>
        <span style={{fontSize:14}}>All services →</span>
      </div>
      <div className="grid-3">
        {[
          {t:'Mobile Forensics', d:'Recover deleted SMS, chats, locations & app data from iOS / Android.'},
          {t:'Cloud Forensics', d:'Preserve & analyse evidence across Google, Microsoft 365, AWS, SaaS apps.'},
          {t:'Insider Investigation', d:'Trace data exfiltration, IP theft & employee misconduct discreetly.'},
          {t:'Malware & Intrusion', d:'Identify scope, dwell time, attribution & remediation for active breaches.'},
          {t:'Email Authentication', d:'Verify headers, detect spoofing, BEC & phishing — court-ready findings.'},
          {t:'Fraud Investigation', d:'Financial, identity, claims & corporate fraud — end-to-end casework.'},
        ].map(s => (
          <SkBox key={s.t} style={{padding: 18}}>
            <div className="diamond" style={{marginBottom:10}}></div>
            <h3 style={{margin:'0 0 8px', fontSize:18, fontWeight:'normal'}}>{s.t}</h3>
            <div style={{fontSize:13, color:'var(--ink-soft)', lineHeight:1.4}}>{s.d}</div>
            <div style={{marginTop:12, fontSize:13}}>Learn more →</div>
          </SkBox>
        ))}
      </div>
      <SeoNote style={{top: 18, right: 36}}>Internal links to all 7 service pages.</SeoNote>
    </div>

    {/* Training callout */}
    <div className="body-pad" style={{paddingTop:8, position:'relative'}}>
      <SkBox style={{padding:0, overflow:'hidden'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr'}}>
          <div style={{padding:28}}>
            <div className="sk-label">Cyber Eye Academy</div>
            <h2 className="sk-h sk-h-lg" style={{margin:'10px 0'}}>Train your officers<br/>& security team.</h2>
            <SkLines widths={[100, 80]} />
            <div style={{display:'flex',gap:10,marginTop:14}}>
              <div className="sk-pill">For Police</div>
              <div className="sk-pill">For Corporate</div>
              <div className="sk-pill">Course catalogue →</div>
            </div>
          </div>
          <SkImg label="classroom / hands-on lab" style={{height: 280, borderRadius:0, border:'none', borderLeft:'1.5px solid var(--ink)'}}/>
        </div>
      </SkBox>
      <SeoNote style={{top: 18, right: 36}}>Training = its own SEO surface ("digital forensics training for police").</SeoNote>
    </div>

    {/* Sectors strip */}
    <div className="body-pad" style={{paddingTop: 8, position:'relative'}}>
      <h2 className="sk-h sk-h-lg" style={{marginBottom:18}}>Who we serve</h2>
      <div style={{display:'flex',gap:12, flexWrap:'wrap'}}>
        {['Law Enforcement & Police','Legal & Litigation','Corporate Enterprise','Government Agencies','BFSI & Insurance'].map(i => (
          <div key={i} className="sk-pill">{i}</div>
        ))}
      </div>
      <SeoNote style={{top: 18, right: 36}}>Each pill links to /sectors/[slug] — long-tail anchor.</SeoNote>
    </div>

    {/* Featured case file */}
    <div className="body-pad" style={{paddingTop: 8}}>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap: 24}}>
        <SkImg label="case file · redacted exhibit" style={{height: 260}} />
        <div className="stack-lg">
          <div className="sk-label">Case File · Corporate IP Theft</div>
          <h3 className="sk-h sk-h-lg">"Recovered 14 deleted<br/>chats. Conviction in<br/>9 months."</h3>
          <SkLines widths={[100, 85, 60]} />
          <div style={{display:'flex',gap:24,marginTop:6}}>
            <div><div style={{fontSize:32}}>2.4 TB</div><div className="sk-label">data examined</div></div>
            <div><div style={{fontSize:32}}>14</div><div className="sk-label">deleted artefacts recovered</div></div>
          </div>
          <div className="sk-pill" style={{alignSelf:'flex-start'}}>Read the full case file →</div>
        </div>
      </div>
    </div>

    {/* Testimonials */}
    <div className="body-pad" style={{paddingTop: 8, position:'relative'}}>
      <h2 className="sk-h sk-h-lg" style={{marginBottom:18}}>What clients say</h2>
      <div className="grid-3">
        {[
          {role:'Senior Counsel', org:'Litigation firm'},
          {role:'Cyber Crime Inspector', org:'State Police'},
          {role:'CISO', org:'Listed bank'},
        ].map((p,i) => (
          <SkBox key={i} style={{padding:18}}>
            <div style={{fontSize:32, lineHeight:0.5, marginBottom:8}}>"</div>
            <SkLines widths={[100,90,70]} />
            <div style={{display:'flex',alignItems:'center',gap:10,marginTop:14}}>
              <div className="sk-img" style={{width:36,height:36,borderRadius:'50%',fontSize:8}}>av</div>
              <div>
                <div style={{fontSize:13}}>Name, {p.role}</div>
                <div style={{fontSize:11,color:'var(--ink-soft)'}}>{p.org}</div>
              </div>
            </div>
          </SkBox>
        ))}
      </div>
      <SeoNote style={{top: 18, right: 36}}>Review schema per testimonial.</SeoNote>
    </div>

    {/* Insights */}
    <div className="body-pad" style={{paddingTop: 8}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',marginBottom:18}}>
        <h2 className="sk-h sk-h-lg">Latest from the lab</h2>
        <span style={{fontSize:14}}>All insights →</span>
      </div>
      <div className="grid-3">
        {[
          'Recovering Deleted WhatsApp on iOS 18',
          'BEC Fraud: 5 Header Forensics Steps',
          'Cloud Forensics in M365: What Logs Survive?',
        ].map((t,i) => (
          <div key={i}>
            <SkImg label="article thumb" style={{height: 130, marginBottom: 12}} />
            <div className="sk-label">Tutorial · 6 min read</div>
            <h4 style={{margin:'6px 0', fontWeight:'normal', fontSize:17, lineHeight:1.2}}>{t}</h4>
            <SkLines widths={[90, 70]} />
          </div>
        ))}
      </div>
    </div>

    {/* FAQ */}
    <div className="body-pad" style={{paddingTop: 8, position:'relative'}}>
      <h2 className="sk-h sk-h-lg" style={{marginBottom:18}}>Frequently asked</h2>
      <div className="stack">
        {[
          'Are your forensic reports court-admissible?',
          'Can you recover deleted WhatsApp / Signal messages?',
          'Do you preserve chain of custody?',
          'How fast can you respond to an active intrusion?',
          'Do you provide expert witness testimony?',
        ].map(q => (
          <SkBox key={q} style={{padding:'14px 18px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <span>{q}</span>
            <span style={{fontSize:22, color:'var(--muted)'}}>+</span>
          </SkBox>
        ))}
      </div>
      <SeoNote style={{top: 18, right: 36}}>FAQPage schema → rich results.</SeoNote>
      <AiNote style={{top: 48, right: 36}}>Q&A format — citation-ready for LLMs.</AiNote>
    </div>

    {/* Final CTA */}
    <div className="body-pad" style={{paddingTop: 8, paddingBottom: 36}}>
      <SkBox fill style={{padding: 36, textAlign:'center'}}>
        <div className="sk-h sk-h-lg" style={{color:'var(--paper)', marginBottom:12}}>
          Active incident or open case?<br/>Speak to a certified examiner — 24/7.
        </div>
        <div style={{display:'flex', gap:12, justifyContent:'center', marginTop:14}}>
          <div style={{background:'var(--paper)', color:'var(--ink)', padding:'10px 22px', borderRadius:6}}>Open a case →</div>
          <div style={{border:'1.5px solid var(--paper)', color:'var(--paper)', padding:'10px 22px', borderRadius:6}}>+91 0000 000 000 (24/7)</div>
        </div>
      </SkBox>
    </div>
  </PageFrame>
);

// ---------- ABOUT ----------
const AboutPage = () => (
  <PageFrame title="02 — About" slug="/about" url="cybereye.com/about" activeNav="About">
    <div className="body-pad" style={{position:'relative'}}>
      <SeoTag>H1 · brand + intent</SeoTag>
      <h1 className="sk-h sk-h-xl" style={{margin:'10px 0 20px'}}>We find what others miss —<br/>and prove it in court.</h1>
      <div style={{display:'grid', gridTemplateColumns:'1.4fr 1fr', gap: 32, alignItems:'start'}}>
        <div className="stack">
          <SkLines widths={[100,100,90,75]} />
          <SkLines widths={[100,80,60]} />
        </div>
        <SkImg label="founders / lab interior" style={{height: 240}} />
      </div>
      <SeoNote style={{top: 20, right: 36}}>~600 words first-party story = E-E-A-T signal.</SeoNote>
    </div>

    {/* Numbers */}
    <div className="body-pad" style={{paddingTop:0}}>
      <div className="grid-4">
        {[
          {n:'2018', l:'Founded'},
          {n:'600+', l:'Cases handled'},
          {n:'40+', l:'Officers trained / yr'},
          {n:'12', l:'Certified examiners'},
        ].map(s => (
          <SkBox key={s.l} style={{padding:18}}>
            <div style={{fontSize:38, lineHeight:1}}>{s.n}</div>
            <div className="sk-label" style={{marginTop:6}}>{s.l}</div>
          </SkBox>
        ))}
      </div>
    </div>

    {/* Values */}
    <div className="body-pad" style={{paddingTop:24}}>
      <h2 className="sk-h sk-h-lg" style={{marginBottom:18}}>How we operate</h2>
      <div className="grid-3">
        {[
          {t:'Court-first methodology', d:'Every step documented. Every artefact hashed. Every report defensible.'},
          {t:'Examiner-led, never sold', d:'You speak to the analyst handling your case — not a sales filter.'},
          {t:'Discretion by default', d:'NDAs, encrypted transit, sealed evidence handling for sensitive matters.'},
        ].map(v => (
          <SkBox key={v.t} style={{padding:18}}>
            <div className="diamond" style={{marginBottom:10}}></div>
            <h3 style={{margin:'0 0 8px', fontSize:18, fontWeight:'normal'}}>{v.t}</h3>
            <div style={{fontSize:13, color:'var(--ink-soft)', lineHeight:1.45}}>{v.d}</div>
          </SkBox>
        ))}
      </div>
    </div>

    {/* Accreditations */}
    <div className="body-pad" style={{paddingTop:24}}>
      <h2 className="sk-h sk-h-lg" style={{marginBottom:18}}>Accreditations & memberships</h2>
      <div className="grid-4">
        {['ISO 17025 aligned','CERT-In empanelled','HTCIA member','IACIS member'].map(a => (
          <SkBox key={a} style={{padding:16, textAlign:'center'}}>
            <SkImg label="badge" style={{height:60, marginBottom:10}} />
            <div style={{fontSize:14}}>{a}</div>
          </SkBox>
        ))}
      </div>
    </div>

    {/* Team preview */}
    <div className="body-pad" style={{paddingTop:24, position:'relative'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',marginBottom:18}}>
        <h2 className="sk-h sk-h-lg">Our examiners</h2>
        <span style={{fontSize:14}}>Full team →</span>
      </div>
      <div className="grid-4">
        {[1,2,3,4].map(i => (
          <div key={i}>
            <SkImg label="headshot" style={{height: 180, marginBottom: 10}} />
            <div style={{fontSize:15}}>Name Surname</div>
            <div className="sk-label">Principal Examiner · EnCE, GCFA, CHFI</div>
          </div>
        ))}
      </div>
      <AiNote style={{top: 18, right: 36}}>Named examiners w/ forensic certs → LLM trust.</AiNote>
    </div>

    <div style={{height: 24}}></div>
  </PageFrame>
);

// ---------- SERVICES HUB ----------
const ServicesHubPage = () => (
  <PageFrame title="03 — Services Hub" slug="/services" url="cybereye.com/services" activeNav="Services">
    <div style={{padding:'14px 36px', borderBottom:'1.5px dashed var(--ink)', fontSize:13, color:'var(--ink-soft)', position:'relative'}}>
      Home / <b style={{color:'var(--ink)'}}>Services</b>
      <SeoNote style={{top: 8, right: 36}}>BreadcrumbList schema.</SeoNote>
    </div>

    <div className="body-pad" style={{position:'relative'}}>
      <SeoTag>H1</SeoTag>
      <h1 className="sk-h sk-h-xl" style={{margin:'10px 0 16px'}}>Digital forensic &<br/>investigation services.</h1>
      <SkLines widths={[80, 60]} />
      <SeoNote style={{top: 20, right: 36}}>200-word intro for keyword context.</SeoNote>
    </div>

    <div className="body-pad" style={{paddingTop:0, position:'relative'}}>
      <div className="grid-2">
        {[
          {t:'Mobile Forensics', sub:'iOS · Android · feature phones · SIM · IMEI tracing', kw:'mobile forensic services'},
          {t:'Cloud Forensics', sub:'Google Workspace · M365 · AWS · Dropbox · SaaS apps', kw:'cloud forensics company'},
          {t:'Insider Investigation', sub:'Data exfiltration · IP theft · misconduct · ghost employees', kw:'insider threat investigation'},
          {t:'Malware & Intrusion Investigation', sub:'Triage · scoping · attribution · remediation', kw:'malware forensics service'},
          {t:'Email Authentication & Forensics', sub:'Header analysis · spoof detection · BEC · phishing chains', kw:'email forensics expert'},
          {t:'Fraud Investigation', sub:'Financial · identity · claims · KYC · UPI / wire-fraud', kw:'fraud investigation services'},
          {t:'Disk / Computer Forensics', sub:'Imaging · deleted-file recovery · timeline reconstruction', kw:'computer forensics services'},
        ].map(s => (
          <SkBox key={s.t} style={{padding:22}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:10}}>
              <h3 style={{margin:0, fontSize:22, fontWeight:'normal'}}>{s.t}</h3>
              <span className="diamond"></span>
            </div>
            <div style={{fontSize:14, color:'var(--ink-soft)', marginBottom:14}}>{s.sub}</div>
            <SkLines widths={[100,85,70]} />
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:18}}>
              <span style={{fontSize:14}}>Explore →</span>
              <SeoTag>{s.kw}</SeoTag>
            </div>
          </SkBox>
        ))}
      </div>
      <SeoNote style={{top: 8, right: 36}}>Each card → /services/[slug]. Anchor = target keyword.</SeoNote>
    </div>

    {/* How we work */}
    <div className="body-pad" style={{paddingTop:8}}>
      <h2 className="sk-h sk-h-lg" style={{marginBottom:18}}>How an engagement works</h2>
      <div className="grid-4">
        {[
          {n:'01', t:'Intake', d:'Free 30-min triage call. NDA + scope.'},
          {n:'02', t:'Acquire', d:'Evidence preserved with chain of custody.'},
          {n:'03', t:'Examine', d:'Lab analysis with twin-examiner review.'},
          {n:'04', t:'Report', d:'Court-ready report + expert testimony if needed.'},
        ].map(s => (
          <SkBox key={s.n} style={{padding:18}}>
            <div className="sk-label" style={{marginBottom:8}}>{s.n}</div>
            <h4 style={{margin:'0 0 6px', fontSize:18, fontWeight:'normal'}}>{s.t}</h4>
            <div style={{fontSize:13, color:'var(--ink-soft)'}}>{s.d}</div>
          </SkBox>
        ))}
      </div>
    </div>

    <div style={{height: 24}}></div>
  </PageFrame>
);

// ---------- SERVICE DETAIL (Mobile Forensics example) ----------
const ServiceDetailPage = () => (
  <PageFrame title="04 — Service Detail (Mobile Forensics example)" slug="/services/[slug]" url="cybereye.com/services/mobile-forensics" activeNav="Services">
    <div style={{padding:'14px 36px', borderBottom:'1.5px dashed var(--ink)', fontSize:13, color:'var(--ink-soft)'}}>
      Home / Services / <b style={{color:'var(--ink)'}}>Mobile Forensics</b>
    </div>

    {/* Hero */}
    <div className="body-pad" style={{position:'relative'}}>
      <div style={{display:'grid', gridTemplateColumns:'1.4fr 1fr', gap: 32, alignItems:'start'}}>
        <div className="stack">
          <SeoTag>H1 · exact-match keyword</SeoTag>
          <h1 className="sk-h sk-h-xl">Mobile Forensic<br/>Services</h1>
          <SkLines widths={[100, 90, 70]} />
          <div style={{display:'flex',gap:10, marginTop:8}}>
            <div className="sk-pill sk-pill-fill">Open a case</div>
            <div className="sk-pill">Sample report (PDF)</div>
          </div>
          <div style={{display:'flex',gap:10,marginTop:14, flexWrap:'wrap'}}>
            {['Cellebrite UFED','MSAB XRY','Magnet AXIOM','Oxygen Detective'].map(b => <div key={b} className="sk-pill" style={{fontSize:12}}>{b}</div>)}
          </div>
        </div>
        <SkBox style={{padding:18}}>
          <div className="sk-label" style={{marginBottom:10}}>On this page</div>
          <ul style={{margin:0, paddingLeft:18, fontSize:14, lineHeight:1.7}}>
            <li>What is mobile forensics?</li>
            <li>Data we can recover</li>
            <li>Devices supported</li>
            <li>Methodology & chain of custody</li>
            <li>Sample deliverables</li>
            <li>Pricing & turnaround</li>
            <li>FAQ</li>
          </ul>
          <AiTag>Jump links · LLM chunk anchors</AiTag>
        </SkBox>
      </div>
      <SeoNote style={{top: 14, right: 36}}>Slug = primary keyword.</SeoNote>
    </div>

    {/* Definition */}
    <div className="body-pad" style={{paddingTop: 8, position:'relative'}}>
      <h2 className="sk-h sk-h-lg" style={{marginBottom:12}}>What is mobile forensics?</h2>
      <SkBox style={{padding:18, background:'var(--paper-dark)'}}>
        <SkLines widths={[100,100,80]} />
      </SkBox>
      <SeoNote style={{top: 8, right: 36}}>40-50 word definition → featured snippet.</SeoNote>
      <AiNote style={{top: 36, right: 36}}>Tight definitional para LLMs quote.</AiNote>
    </div>

    {/* What we recover */}
    <div className="body-pad" style={{paddingTop:8, position:'relative'}}>
      <h2 className="sk-h sk-h-lg" style={{marginBottom:18}}>What we can recover</h2>
      <div className="grid-3">
        {[
          'Deleted SMS & MMS',
          'WhatsApp · Signal · Telegram chats',
          'Call logs & contacts',
          'Photos, videos & metadata (EXIF)',
          'GPS history & geofencing',
          'App data (Instagram, Tinder, etc.)',
          'Browser history & cookies',
          'Cloud sync artefacts',
          'Cryptocurrency wallets',
        ].map(s => (
          <SkBox key={s} style={{padding:14, display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <span style={{fontSize:14}}>{s}</span><span style={{color:'var(--muted)'}}>✓</span>
          </SkBox>
        ))}
      </div>
      <AiNote style={{top: 18, right: 36}}>Concrete, scannable list — high-value for AI answers.</AiNote>
    </div>

    {/* Devices supported */}
    <div className="body-pad" style={{paddingTop:8}}>
      <h2 className="sk-h sk-h-lg" style={{marginBottom:18}}>Devices we support</h2>
      <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
        {['iPhone (all gens)','iPad','Android (Samsung, Pixel, OnePlus, Xiaomi…)','Feature phones','Locked devices','Damaged devices (chip-off)','SIM cards','Wearables'].map(d => (
          <div key={d} className="sk-pill" style={{fontSize:13}}>{d}</div>
        ))}
      </div>
    </div>

    {/* Methodology */}
    <div className="body-pad" style={{paddingTop:8}}>
      <h2 className="sk-h sk-h-lg" style={{marginBottom:18}}>Methodology · chain of custody</h2>
      <div className="grid-4">
        {[
          {s:'Seize', d:'Faraday-bagged, hash-sealed.'},
          {s:'Image', d:'Bit-by-bit, write-blocked.'},
          {s:'Examine', d:'Twin-examiner review.'},
          {s:'Report', d:'Findings + exhibits + testimony.'},
        ].map((step,i) => (
          <SkBox key={step.s} style={{padding:16}}>
            <div className="sk-label">Step 0{i+1}</div>
            <h4 style={{margin:'6px 0 4px', fontSize:18, fontWeight:'normal'}}>{step.s}</h4>
            <div style={{fontSize:13, color:'var(--ink-soft)'}}>{step.d}</div>
          </SkBox>
        ))}
      </div>
    </div>

    {/* Proof */}
    <div className="body-pad" style={{paddingTop:8, position:'relative'}}>
      <h2 className="sk-h sk-h-lg" style={{marginBottom:18}}>Mobile forensics case files</h2>
      <div className="grid-3">
        {[
          'IP theft via personal phone (recovered)',
          'BEC fraud — VIP impersonation (traced)',
          'Custody dispute — location timeline',
        ].map((t,i) => (
          <SkBox key={i} style={{padding:0, overflow:'hidden'}}>
            <SkImg label="case file" style={{height:120, borderRadius:0, border:'none', borderBottom:'1.5px solid var(--ink)'}} />
            <div style={{padding:14}}>
              <div className="sk-label">Corporate · 2025</div>
              <h4 style={{margin:'6px 0', fontWeight:'normal'}}>{t}</h4>
              <SkLines widths={[90,70]} />
            </div>
          </SkBox>
        ))}
      </div>
      <SeoNote style={{top: 18, right: 36}}>Cross-link to /case-files/[slug].</SeoNote>
    </div>

    {/* FAQ */}
    <div className="body-pad" style={{paddingTop:8, position:'relative'}}>
      <h2 className="sk-h sk-h-lg" style={{marginBottom:18}}>Mobile forensics FAQ</h2>
      <div className="stack">
        {[
          'Can you recover deleted WhatsApp messages?',
          'Do I need physical access to the device?',
          'Will examination damage the phone or wipe data?',
          'Is your report admissible under Indian Evidence Act § 65B?',
          'How long does a mobile forensic exam take?',
          'Can you crack a locked iPhone or Samsung?',
        ].map(q => (
          <SkBox key={q} style={{padding:'14px 18px', display:'flex', justifyContent:'space-between'}}>
            <span>{q}</span><span style={{color:'var(--muted)', fontSize:22}}>+</span>
          </SkBox>
        ))}
      </div>
      <SeoNote style={{top: 18, right: 36}}>FAQPage schema. Long-tail questions = featured snippets.</SeoNote>
    </div>

    {/* CTA */}
    <div className="body-pad" style={{paddingTop:8, paddingBottom: 32}}>
      <SkBox fill style={{padding:28, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div className="sk-h sk-h-lg" style={{color:'var(--paper)'}}>Got a device? Get a quote in 24hrs.</div>
        <div style={{background:'var(--paper)', color:'var(--ink)', padding:'10px 22px', borderRadius:6}}>Start a case →</div>
      </SkBox>
    </div>
  </PageFrame>
);

Object.assign(window, { HomePage, AboutPage, ServicesHubPage, ServiceDetailPage });
