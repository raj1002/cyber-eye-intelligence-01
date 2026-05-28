// Sectors & proof: Sectors hub, Sector detail, Case Files hub, Case File detail

const IndustriesHubPage = () => (
  <PageFrame title="05 — Sectors Hub" slug="/sectors" url="cybereye.com/sectors" activeNav="Sectors">
    <div style={{padding:'14px 36px', borderBottom:'1.5px dashed var(--ink)', fontSize:13, color:'var(--ink-soft)'}}>
      Home / <b style={{color:'var(--ink)'}}>Sectors</b>
    </div>

    <div className="body-pad" style={{position:'relative'}}>
      <SeoTag>H1 · vertical landing</SeoTag>
      <h1 className="sk-h sk-h-xl" style={{margin:'10px 0 16px'}}>Built for the sectors<br/>that need evidence.</h1>
      <SkLines widths={[80, 60]} />
      <SeoNote style={{top:20, right:36}}>Hub for 5 sector pages — captures vertical long-tail.</SeoNote>
    </div>

    <div className="body-pad" style={{paddingTop:0}}>
      <div className="grid-3">
        {[
          {t:'Law Enforcement & Police', d:'Cyber cells · economic offence wings · CIDs', kw:'digital forensics for police'},
          {t:'Legal & Litigation', d:'Family · commercial · criminal defence · arbitration', kw:'forensics for law firms'},
          {t:'Corporate Enterprise', d:'HR investigations · IP theft · whistleblower cases', kw:'corporate digital forensics'},
          {t:'Government Agencies', d:'Anti-corruption · intelligence · regulatory', kw:'government forensic services'},
          {t:'BFSI & Insurance', d:'Banking fraud · UPI · claims · KYC abuse', kw:'banking fraud investigation'},
        ].map(i => (
          <SkBox key={i.t} style={{padding:20}}>
            <SkImg label="sector icon" style={{height:80, marginBottom:12}} />
            <h3 style={{margin:'0 0 6px', fontSize:20, fontWeight:'normal'}}>{i.t}</h3>
            <div className="sk-label" style={{marginBottom:10}}>{i.d}</div>
            <SkLines widths={[100, 70]} />
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:14}}>
              <span style={{fontSize:14}}>Explore →</span>
              <SeoTag>{i.kw}</SeoTag>
            </div>
          </SkBox>
        ))}
      </div>
    </div>

    <div style={{height: 24}}></div>
  </PageFrame>
);

const IndustryDetailPage = () => (
  <PageFrame title="06 — Sector Detail (Law Enforcement)" slug="/sectors/[slug]" url="cybereye.com/sectors/law-enforcement" activeNav="Sectors">
    <div style={{padding:'14px 36px', borderBottom:'1.5px dashed var(--ink)', fontSize:13, color:'var(--ink-soft)'}}>
      Home / Sectors / <b style={{color:'var(--ink)'}}>Law Enforcement</b>
    </div>

    <div className="body-pad" style={{position:'relative'}}>
      <SeoTag>H1 · sector × service combo</SeoTag>
      <h1 className="sk-h sk-h-xl" style={{margin:'10px 0 16px'}}>Digital forensics for<br/>law enforcement.</h1>
      <SkLines widths={[88, 72]} />
      <div style={{display:'flex',gap:10, marginTop:14}}>
        <div className="sk-pill sk-pill-fill">Request a sector briefing</div>
        <div className="sk-pill">Download empanelment dossier</div>
      </div>
      <SeoNote style={{top:20, right:36}}>Captures "forensic lab for police", "cyber cell support", etc.</SeoNote>
    </div>

    {/* Sector challenges */}
    <div className="body-pad" style={{paddingTop:8}}>
      <h2 className="sk-h sk-h-lg" style={{marginBottom:18}}>The challenges officers face</h2>
      <div className="grid-3">
        {[
          'Locked / encrypted seized devices',
          'Volatile cloud evidence',
          'Cross-border crypto fraud trails',
          'Deepfake & manipulated media',
          'Case backlog vs. limited lab capacity',
          '§ 65B certificate requirements',
        ].map(t => (
          <SkBox key={t} style={{padding:16}}>
            <div className="diamond" style={{marginBottom:8}}></div>
            <div style={{fontSize:15}}>{t}</div>
          </SkBox>
        ))}
      </div>
    </div>

    {/* Services for this sector */}
    <div className="body-pad" style={{paddingTop:8, position:'relative'}}>
      <h2 className="sk-h sk-h-lg" style={{marginBottom:18}}>How we support police & cyber cells</h2>
      <div className="grid-2">
        {[
          'On-call mobile forensic support (24/7)',
          'Seized-device imaging & analysis',
          'Cryptocurrency tracing & exchange liaison',
          'Audio / video / image authentication',
          'Expert witness testimony in court',
          'In-house training for cyber cell officers',
        ].map(s => (
          <SkBox key={s} style={{padding:18, display:'flex', justifyContent:'space-between'}}>
            <span>{s}</span><span style={{color:'var(--muted)'}}>→</span>
          </SkBox>
        ))}
      </div>
      <SeoNote style={{top:18, right:36}}>Sector × service cross-links = long-tail combos.</SeoNote>
    </div>

    {/* Frameworks */}
    <div className="body-pad" style={{paddingTop:8}}>
      <h2 className="sk-h sk-h-lg" style={{marginBottom:18}}>Frameworks & evidentiary standards</h2>
      <div style={{display:'flex', flexWrap:'wrap', gap:10}}>
        {['Indian Evidence Act § 65B','IT Act 2000','BNS / BNSS','SOP for First Responders','CCTNS interfacing','ISO/IEC 27037','ACPO guidelines','Daubert standard'].map(r => (
          <div key={r} className="sk-pill">{r}</div>
        ))}
      </div>
    </div>

    {/* Sector case file */}
    <div className="body-pad" style={{paddingTop:8}}>
      <h2 className="sk-h sk-h-lg" style={{marginBottom:18}}>Police engagements</h2>
      <div className="grid-2">
        {[
          'State cyber cell · ₹4.2 Cr UPI fraud chain mapped',
          'EOW · seized phones unlocked, chats recovered',
        ].map((t,i) => (
          <SkBox key={i} style={{padding:0, overflow:'hidden'}}>
            <SkImg label="case file" style={{height:150, borderRadius:0, border:'none', borderBottom:'1.5px solid var(--ink)'}} />
            <div style={{padding:18}}>
              <div className="sk-label">2025</div>
              <h4 style={{margin:'6px 0', fontWeight:'normal', fontSize:18}}>{t}</h4>
              <SkLines widths={[90,70]} />
            </div>
          </SkBox>
        ))}
      </div>
    </div>

    <div style={{height: 24}}></div>
  </PageFrame>
);

const CaseStudiesHubPage = () => (
  <PageFrame title="07 — Case Files Hub" slug="/case-files" url="cybereye.com/case-files" activeNav="Case Files">
    <div style={{padding:'14px 36px', borderBottom:'1.5px dashed var(--ink)', fontSize:13, color:'var(--ink-soft)'}}>
      Home / <b style={{color:'var(--ink)'}}>Case Files</b>
    </div>

    <div className="body-pad" style={{position:'relative'}}>
      <h1 className="sk-h sk-h-xl" style={{margin:'0 0 16px'}}>Real cases.<br/>Real outcomes.</h1>
      <SkLines widths={[80, 60]} />
      <SeoNote style={{top:20, right:36}}>Strong E-E-A-T page — anonymised but specific outcomes.</SeoNote>
    </div>

    {/* Filters */}
    <div className="body-pad" style={{paddingTop:0}}>
      <div style={{display:'flex', gap:10, flexWrap:'wrap', marginBottom: 20}}>
        <div className="sk-label" style={{alignSelf:'center', marginRight:8}}>Service:</div>
        {['All','Mobile','Cloud','Insider','Malware','Email','Fraud'].map((f,i) => (
          <div key={f} className={i === 0 ? 'sk-pill sk-pill-fill' : 'sk-pill'}>{f}</div>
        ))}
      </div>
      <div style={{display:'flex', gap:10, flexWrap:'wrap', marginBottom:24}}>
        <div className="sk-label" style={{alignSelf:'center', marginRight:8}}>Sector:</div>
        {['Police','Legal','Corporate','Govt','BFSI','Insurance'].map(f => <div key={f} className="sk-pill">{f}</div>)}
      </div>
    </div>

    {/* Featured + grid */}
    <div className="body-pad" style={{paddingTop:0}}>
      <SkBox style={{padding:0, overflow:'hidden', marginBottom: 20}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr'}}>
          <SkImg label="featured exhibit" style={{height: 280, borderRadius:0, border:'none', borderRight:'1.5px solid var(--ink)'}} />
          <div style={{padding: 26}}>
            <div className="sk-label">Featured · Corporate · 2025</div>
            <h2 className="sk-h sk-h-lg" style={{margin:'10px 0'}}>"Recovered 14 deleted chats. Conviction in 9 months."</h2>
            <SkLines widths={[100,90,70]} />
            <div style={{display:'flex',gap:24,marginTop:14}}>
              <div><div style={{fontSize:24}}>2.4 TB</div><div className="sk-label">examined</div></div>
              <div><div style={{fontSize:24}}>9 mo</div><div className="sk-label">to verdict</div></div>
            </div>
            <div className="sk-pill" style={{marginTop:16}}>Read full case file →</div>
          </div>
        </div>
      </SkBox>
      <div className="grid-3">
        {[
          'Cloud forensics — exfil via personal Drive',
          'Insider trading — Telegram chats recovered',
          'Insurance claim fraud — staged video proven',
          'BEC scam — header trail to threat actor',
          'Ghost employee fraud — 3-yr timeline rebuilt',
          'Malware breach — dwell time pinned to 41 days',
        ].map((t,i) => (
          <SkBox key={i} style={{padding:0, overflow:'hidden'}}>
            <SkImg label="thumb" style={{height:130, borderRadius:0, border:'none', borderBottom:'1.5px solid var(--ink)'}} />
            <div style={{padding:14}}>
              <div className="sk-label">Sector · Service · 2024</div>
              <h4 style={{margin:'6px 0', fontWeight:'normal', fontSize:16}}>{t}</h4>
              <SkLines widths={[100,75]} />
            </div>
          </SkBox>
        ))}
      </div>
    </div>

    <div style={{height: 24}}></div>
  </PageFrame>
);

const CaseStudyDetailPage = () => (
  <PageFrame title="08 — Case File Detail (template)" slug="/case-files/[slug]" url="cybereye.com/case-files/corporate-ip-theft" activeNav="Case Files">
    <div style={{padding:'14px 36px', borderBottom:'1.5px dashed var(--ink)', fontSize:13, color:'var(--ink-soft)'}}>
      Home / Case Files / <b style={{color:'var(--ink)'}}>Corporate · IP theft via WhatsApp</b>
    </div>

    {/* Hero */}
    <div className="body-pad" style={{position:'relative'}}>
      <div style={{display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:32, alignItems:'start'}}>
        <div>
          <div className="sk-label">Corporate · Mobile + Insider · 2025</div>
          <h1 className="sk-h sk-h-xl" style={{margin:'10px 0 14px'}}>Recovered 14 deleted<br/>chats. Conviction<br/>in 9 months.</h1>
          <SkLines widths={[100, 80]} />
        </div>
        <SkBox style={{padding:20}}>
          <div className="sk-label" style={{marginBottom:10}}>At a glance</div>
          <div className="stack">
            <div style={{display:'flex',justifyContent:'space-between'}}><span>Client</span><b>Listed manufacturer</b></div>
            <div style={{display:'flex',justifyContent:'space-between'}}><span>Sector</span><b>Corporate</b></div>
            <div style={{display:'flex',justifyContent:'space-between'}}><span>Service</span><b>Mobile + Insider</b></div>
            <div style={{display:'flex',justifyContent:'space-between'}}><span>Duration</span><b>6 weeks</b></div>
            <div style={{display:'flex',justifyContent:'space-between'}}><span>Examiners</span><b>3 (twin-reviewed)</b></div>
          </div>
        </SkBox>
      </div>
      <SeoNote style={{top:20, right:36}}>CaseStudy / Article schema + author + date.</SeoNote>
    </div>

    {/* Big numbers */}
    <div className="body-pad" style={{paddingTop:0}}>
      <div className="grid-4">
        {[
          {n:'2.4 TB', l:'Data examined'},
          {n:'14', l:'Deleted chats recovered'},
          {n:'9 mo', l:'To conviction'},
          {n:'₹0', l:'IP loss after seizure'},
        ].map(s => (
          <SkBox key={s.l} style={{padding:18}}>
            <div style={{fontSize:36, lineHeight:1}}>{s.n}</div>
            <div className="sk-label" style={{marginTop:6}}>{s.l}</div>
          </SkBox>
        ))}
      </div>
    </div>

    {/* Story */}
    <div className="body-pad" style={{paddingTop:8, position:'relative'}}>
      <div style={{display:'grid', gridTemplateColumns:'1fr 280px', gap: 36}}>
        <div className="stack-lg">
          <div>
            <h2 className="sk-h" style={{marginBottom:8}}>The brief</h2>
            <SkLines widths={[100,100,90,75]} />
          </div>
          <div>
            <h2 className="sk-h" style={{marginBottom:8}}>What we did</h2>
            <SkLines widths={[100,100,80]} />
            <SkImg label="timeline · evidence chain" style={{height: 180, margin:'16px 0'}} />
            <SkLines widths={[100,90,70]} />
          </div>
          <div>
            <h2 className="sk-h" style={{marginBottom:8}}>The outcome</h2>
            <SkLines widths={[100,90,60]} />
          </div>

          <SkBox style={{padding:24, background:'var(--paper-dark)'}}>
            <div style={{fontSize:46, lineHeight:0.3}}>"</div>
            <div style={{fontSize:22, lineHeight:1.3, margin:'8px 0 12px'}}>Pull quote from the client signalling speed + admissibility.</div>
            <div className="sk-label">— General Counsel, listed manufacturer</div>
          </SkBox>
        </div>

        <div style={{position:'sticky', top: 0}}>
          <SkBox style={{padding:18, marginBottom: 16}}>
            <div className="sk-label" style={{marginBottom:8}}>Contents</div>
            <ul style={{margin:0, paddingLeft:18, fontSize:14, lineHeight:1.7}}>
              <li>The brief</li>
              <li>What we did</li>
              <li>The outcome</li>
              <li>Lessons learned</li>
            </ul>
          </SkBox>
          <SkBox fill style={{padding:18}}>
            <div style={{color:'var(--paper)', fontSize:16, marginBottom:10}}>Similar case?</div>
            <div style={{background:'var(--paper)', color:'var(--ink)', padding:'8px 14px', borderRadius:6, textAlign:'center', fontSize:14}}>Open a case →</div>
          </SkBox>
        </div>
      </div>
      <AiNote style={{bottom:20, left: 36}}>Brief / Did / Outcome — LLM-friendly narrative arc.</AiNote>
    </div>

    {/* Related */}
    <div className="body-pad" style={{paddingTop:8}}>
      <h2 className="sk-h sk-h-lg" style={{marginBottom:18}}>Related work</h2>
      <div className="grid-3">
        {['Insider Telegram exfil','Cloud Drive copy-out','Departing-employee USB trail'].map((t,i) => (
          <SkBox key={i} style={{padding:0, overflow:'hidden'}}>
            <SkImg label="thumb" style={{height:120, borderRadius:0, border:'none', borderBottom:'1.5px solid var(--ink)'}} />
            <div style={{padding:14}}>
              <div className="sk-label">Corporate · Insider</div>
              <h4 style={{margin:'4px 0', fontWeight:'normal'}}>{t}</h4>
            </div>
          </SkBox>
        ))}
      </div>
    </div>

    <div style={{height: 24}}></div>
  </PageFrame>
);

Object.assign(window, { IndustriesHubPage, IndustryDetailPage, CaseStudiesHubPage, CaseStudyDetailPage });
