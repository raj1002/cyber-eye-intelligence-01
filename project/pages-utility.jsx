// Utility & supporting: Engagement Models, Contact, Examiners, Locations,
// Training Hub, Training Course Detail, Lab Capabilities, Expert Witness,
// Careers, Legal, 404, Search, llms.txt, robots.txt

const PricingPage = () => (
  <PageFrame title="15 — Engagement Models" slug="/engagement-models" url="cybereye.com/engagement-models" activeNav="">
    <div style={{padding:'14px 36px', borderBottom:'1.5px dashed var(--ink)', fontSize:13, color:'var(--ink-soft)'}}>
      Home / <b style={{color:'var(--ink)'}}>Engagement Models</b>
    </div>

    <div className="body-pad" style={{position:'relative'}}>
      <h1 className="sk-h sk-h-xl" style={{margin:'0 0 14px'}}>Engagement models<br/>that fit casework.</h1>
      <SkLines widths={[70]} />
      <SeoNote style={{top:20, right:36}}>"forensic services cost / retainer" — high commercial intent.</SeoNote>
    </div>

    <div className="body-pad" style={{paddingTop:0}}>
      <div className="grid-3">
        {[
          {t:'Single Case', p:'Quote in 24hrs', sub:'One device or matter', f:['Fixed-fee scope','Court-ready report','§ 65B certificate','Expert testimony (add-on)']},
          {t:'Retainer', p:'Monthly retainer', sub:'For firms & corporates', f:['Reserved examiner hours','Priority intake (4hr)','Quarterly fraud brief','Annual training day'], featured:true},
          {t:'Empanelment', p:'Empanel us', sub:'Govt / Police / PSU', f:['CERT-In aligned','Tender-ready dossier','Bulk capacity','Standing rate card']},
        ].map(p => (
          <SkBox key={p.t} fill={p.featured} style={{padding:24, position:'relative'}}>
            {p.featured && <div style={{position:'absolute', top:-10, right:18, background:'var(--accent)', color:'var(--paper)', padding:'2px 10px', borderRadius:4, fontSize:11, fontFamily:'JetBrains Mono, monospace', letterSpacing:'0.08em'}}>POPULAR</div>}
            <div className="sk-label" style={{color:p.featured?'rgba(246,241,231,0.7)':undefined}}>{p.sub}</div>
            <h3 style={{margin:'6px 0', fontSize:24, fontWeight:'normal'}}>{p.t}</h3>
            <div style={{fontSize:30, lineHeight:1, margin:'14px 0'}}>{p.p}</div>
            <div style={{borderTop:'1.5px dashed currentColor', opacity:0.5, margin:'16px 0'}}></div>
            <ul style={{listStyle:'none', padding:0, margin:0, fontSize:14, lineHeight:1.8}}>
              {p.f.map(item => <li key={item}>· {item}</li>)}
            </ul>
            <div style={{
              marginTop:18,
              padding:'8px 14px',
              background: p.featured ? 'var(--paper)' : 'var(--ink)',
              color: p.featured ? 'var(--ink)' : 'var(--paper)',
              borderRadius:6, fontSize:14, textAlign:'center'
            }}>Talk to us →</div>
          </SkBox>
        ))}
      </div>

      <div style={{marginTop: 36}}>
        <h2 className="sk-h sk-h-lg" style={{marginBottom:18}}>Engagement FAQ</h2>
        <div className="stack">
          {[
            'How is a forensic engagement scoped?',
            'Do you offer pro bono for police cases?',
            'Are reports white-labelable for law firms?',
            'What about court appearance fees?',
          ].map(q => (
            <SkBox key={q} style={{padding:'14px 18px', display:'flex', justifyContent:'space-between'}}>
              <span>{q}</span><span style={{color:'var(--muted)', fontSize:22}}>+</span>
            </SkBox>
          ))}
        </div>
      </div>
    </div>

    <div style={{height:24}}></div>
  </PageFrame>
);

const ContactPage = () => (
  <PageFrame title="16 — Contact" slug="/contact" url="cybereye.com/contact" activeNav="Contact">
    <div style={{padding:'14px 36px', borderBottom:'1.5px dashed var(--ink)', fontSize:13, color:'var(--ink-soft)'}}>
      Home / <b style={{color:'var(--ink)'}}>Contact</b>
    </div>

    <div className="body-pad" style={{position:'relative'}}>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:40}}>
        <div>
          <h1 className="sk-h sk-h-xl" style={{margin:'0 0 14px'}}>Talk to an examiner.</h1>
          <SkLines widths={[100, 80]} />

          <div style={{display:'flex', gap:14, marginTop:24}}>
            {[
              {l:'New case / consult', d:'Reply ≤ 4hrs · Mon–Sat'},
              {l:'Active incident', d:'24/7 · Avg pickup 90s'},
            ].map((c,i) => (
              <SkBox key={c.l} fill={i===1} style={{padding:18, flex:1}}>
                <div style={{fontSize:17}}>{c.l}</div>
                <div className="sk-label" style={{marginTop:6, color: i===1?'rgba(246,241,231,0.7)':undefined}}>{c.d}</div>
                <div style={{fontSize:20, marginTop:10}}>{i===1?'+91 0000 000 000':'cases@cybereye.com'}</div>
              </SkBox>
            ))}
          </div>

          <SkBox style={{padding:18, marginTop:18}}>
            <div className="sk-label" style={{marginBottom:8}}>Confidential channels</div>
            <div style={{fontSize:14, lineHeight:1.6}}>
              · PGP key (fingerprint placeholder)<br/>
              · Signal: @cybereye<br/>
              · Sealed evidence drop-off · by appointment
            </div>
          </SkBox>
        </div>

        <SkBox style={{padding:24}}>
          <div className="sk-label" style={{marginBottom:14}}>Open a case</div>
          <div className="stack">
            {['Name','Organisation','Role (police / lawyer / corporate / other)','Work email','Brief description of the matter','This is an active incident'].map((l,i) => (
              <div key={l}>
                <div style={{fontSize:12, marginBottom:4}}>{l}</div>
                {i === 5 ? (
                  <SkBox dashed style={{padding:'10px 12px', display:'flex', alignItems:'center', gap:8}}>
                    <div style={{width:16, height:16, border:'1.5px solid var(--ink)', borderRadius:3}}></div>
                    <span style={{fontSize:13}}>Yes — page on-call</span>
                  </SkBox>
                ) : i === 4 ? (
                  <SkBox dashed style={{padding:'10px 12px', height: 80}}></SkBox>
                ) : (
                  <SkBox dashed style={{padding:'10px 12px', height: 36}}></SkBox>
                )}
              </div>
            ))}
            <div className="sk-pill sk-pill-fill" style={{justifyContent:'center', padding:'10px 16px'}}>Send →</div>
          </div>
        </SkBox>
      </div>
      <SeoNote style={{top:20, right:36}}>NAP + Organization schema (phone, email, address).</SeoNote>
    </div>

    <div className="body-pad" style={{paddingTop:8}}>
      <h2 className="sk-h sk-h-lg" style={{marginBottom:18}}>Labs & offices</h2>
      <div className="grid-4">
        {[
          {city:'Delhi NCR', addr:'Lab + HQ'},
          {city:'Mumbai', addr:'Lab + investigation'},
          {city:'Bengaluru', addr:'Lab + training centre'},
          {city:'Hyderabad', addr:'Investigation cell'},
        ].map(o => (
          <SkBox key={o.city} style={{padding:16}}>
            <div style={{fontSize:18}}>{o.city}</div>
            <div className="sk-label" style={{marginTop:4}}>{o.addr}</div>
            <div style={{fontSize:13, marginTop:8}}>View on map →</div>
          </SkBox>
        ))}
      </div>
    </div>

    <div style={{height:24}}></div>
  </PageFrame>
);

const TeamPage = () => (
  <PageFrame title="17 — Examiners (Team)" slug="/team" url="cybereye.com/team" activeNav="About">
    <div style={{padding:'14px 36px', borderBottom:'1.5px dashed var(--ink)', fontSize:13, color:'var(--ink-soft)'}}>
      Home / About / <b style={{color:'var(--ink)'}}>Examiners</b>
    </div>

    <div className="body-pad" style={{position:'relative'}}>
      <h1 className="sk-h sk-h-xl" style={{margin:'0 0 14px'}}>The examiners<br/>on the bench.</h1>
      <SkLines widths={[60]} />
      <AiNote style={{top:20, right:36}}>Person schema · certs · publications → E-E-A-T + LLM trust.</AiNote>
    </div>

    <div className="body-pad" style={{paddingTop:0}}>
      {['Leadership','Mobile & Device Forensics','Cloud & Network Forensics','Fraud & Investigations','Training Faculty'].map(group => (
        <div key={group} style={{marginBottom: 28}}>
          <h2 className="sk-h" style={{marginBottom:14}}>{group}</h2>
          <div className="grid-4">
            {[1,2,3,4].map(i => (
              <SkBox key={i} style={{padding:0, overflow:'hidden'}}>
                <SkImg label="headshot" style={{height:180, borderRadius:0, border:'none', borderBottom:'1.5px solid var(--ink)'}} />
                <div style={{padding:14}}>
                  <div style={{fontSize:16}}>Name Surname</div>
                  <div className="sk-label" style={{margin:'4px 0'}}>Title</div>
                  <div style={{fontSize:11, color:'var(--ink-soft)'}}>EnCE · GCFA · CHFI · 8 yrs</div>
                  <div style={{display:'flex',gap:8,marginTop:8,fontSize:11}}>
                    <span>LinkedIn</span><span>Talks</span><span>Bio →</span>
                  </div>
                </div>
              </SkBox>
            ))}
          </div>
        </div>
      ))}
    </div>

    <div style={{height:24}}></div>
  </PageFrame>
);

const LocationsHubPage = () => (
  <PageFrame title="18 — Locations (local SEO)" slug="/locations" url="cybereye.com/locations" activeNav="">
    <div style={{padding:'14px 36px', borderBottom:'1.5px dashed var(--ink)', fontSize:13, color:'var(--ink-soft)'}}>
      Home / <b style={{color:'var(--ink)'}}>Locations</b>
    </div>

    <div className="body-pad" style={{position:'relative'}}>
      <h1 className="sk-h sk-h-xl" style={{margin:'0 0 14px'}}>Where we operate.</h1>
      <SkLines widths={[60]} />
      <SeoNote style={{top:20, right:36}}>★ Local SEO — each city ranks for "digital forensics in [city]".</SeoNote>
    </div>

    <div className="body-pad" style={{paddingTop:0}}>
      <SkImg label="India map · lab + office pins" style={{height: 280, marginBottom: 24}}/>
      <div className="grid-3">
        {[
          {c:'Delhi NCR', svc:'HQ · Full lab'},
          {c:'Mumbai', svc:'Full lab'},
          {c:'Bengaluru', svc:'Lab + training centre'},
          {c:'Hyderabad', svc:'Investigation cell'},
          {c:'Chennai', svc:'Investigation cell'},
          {c:'Kolkata', svc:'Investigation cell'},
        ].map(l => (
          <SkBox key={l.c} style={{padding:18}}>
            <div style={{fontSize:20}}>{l.c}</div>
            <div className="sk-label" style={{margin:'6px 0 12px'}}>{l.svc}</div>
            <div style={{fontSize:13}}>Office details →</div>
            <SeoTag>digital forensics {l.c.split(' ')[0].toLowerCase()}</SeoTag>
          </SkBox>
        ))}
      </div>
    </div>

    <div style={{height:24}}></div>
  </PageFrame>
);

// ---------- TRAINING HUB ----------
const TrainingHubPage = () => (
  <PageFrame title="T1 — Training Hub" slug="/training" url="cybereye.com/training" activeNav="Training">
    <div style={{padding:'14px 36px', borderBottom:'1.5px dashed var(--ink)', fontSize:13, color:'var(--ink-soft)'}}>
      Home / <b style={{color:'var(--ink)'}}>Training</b>
    </div>

    <div className="body-pad" style={{position:'relative'}}>
      <SeoTag>H1</SeoTag>
      <h1 className="sk-h sk-h-xl" style={{margin:'10px 0 16px'}}>Cyber Eye Academy.<br/>Train officers & teams.</h1>
      <SkLines widths={[80]} />
      <div style={{display:'flex',gap:10,marginTop:16}}>
        <div className="sk-pill sk-pill-fill">Course catalogue</div>
        <div className="sk-pill">Request a custom programme</div>
        <div className="sk-pill">Training calendar →</div>
      </div>
      <SeoNote style={{top:20, right:36}}>"digital forensics training for police / corporate" — own this term.</SeoNote>
    </div>

    {/* Audience split */}
    <div className="body-pad" style={{paddingTop:0}}>
      <div className="grid-2">
        {[
          {t:'For Police & Investigators', d:'First-responder, cyber cell, EOW, IO programmes.', cta:'Police curriculum →'},
          {t:'For Corporate Security', d:'CISO teams, internal audit, fraud risk, IR drills.', cta:'Corporate curriculum →'},
        ].map(a => (
          <SkBox key={a.t} style={{padding:24}}>
            <h2 className="sk-h" style={{marginBottom:8}}>{a.t}</h2>
            <SkLines widths={[100, 80]} />
            <div className="sk-pill sk-pill-fill" style={{marginTop:18}}>{a.cta}</div>
          </SkBox>
        ))}
      </div>
    </div>

    {/* Course catalogue */}
    <div className="body-pad" style={{paddingTop:8, position:'relative'}}>
      <h2 className="sk-h sk-h-lg" style={{marginBottom:18}}>Course catalogue</h2>
      <div style={{display:'flex',gap:10,flexWrap:'wrap',marginBottom:18}}>
        {['All','Foundation','Mobile','Cloud','Malware','Fraud','Open-Source Intel','Law & Evidence'].map((c,i) => (
          <div key={c} className={i===0?'sk-pill sk-pill-fill':'sk-pill'}>{c}</div>
        ))}
      </div>
      <div className="grid-3">
        {[
          {t:'Digital Evidence — First Responder (2 days)', a:'Police · Foundation'},
          {t:'Mobile Forensics — Hands-on (5 days)', a:'Investigators · Intermediate'},
          {t:'Cloud Forensics for M365 & Google (3 days)', a:'Corporate · Intermediate'},
          {t:'Malware Triage & Reverse Eng. (5 days)', a:'IR teams · Advanced'},
          {t:'UPI & Wire-Fraud Investigation (3 days)', a:'BFSI · Intermediate'},
          {t:'OSINT for Investigators (2 days)', a:'Police · Intermediate'},
          {t:'§ 65B & Court Testimony Workshop (1 day)', a:'Police · Foundation'},
          {t:'Insider Threat & DLP Investigation (2 days)', a:'Corporate · Intermediate'},
          {t:'Cyber Awareness for Executives (½ day)', a:'Corporate · Foundation'},
        ].map(c => (
          <SkBox key={c.t} style={{padding:18}}>
            <div className="sk-label" style={{marginBottom:8}}>{c.a}</div>
            <h4 style={{margin:'0 0 8px', fontWeight:'normal', fontSize:17, lineHeight:1.25}}>{c.t}</h4>
            <SkLines widths={[100, 70]} />
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:14}}>
              <span style={{fontSize:13}}>View course →</span>
              <span className="seo-tag">Course schema</span>
            </div>
          </SkBox>
        ))}
      </div>
      <SeoNote style={{top:18, right:36}}>Each course = its own /training/[slug] with Course + Event schema.</SeoNote>
    </div>

    {/* Logos / past trainings */}
    <div className="body-pad" style={{paddingTop:8}}>
      <h2 className="sk-h sk-h-lg" style={{marginBottom:18}}>Trained at</h2>
      <div className="grid-4">
        {[1,2,3,4,5,6,7,8].map(i => (
          <SkImg key={i} label="state police / academy logo" style={{height: 60}}/>
        ))}
      </div>
    </div>

    <div style={{height:24}}></div>
  </PageFrame>
);

// ---------- TRAINING COURSE DETAIL ----------
const TrainingCoursePage = () => (
  <PageFrame title="T2 — Training Course Detail (template)" slug="/training/[course]" url="cybereye.com/training/mobile-forensics-hands-on" activeNav="Training">
    <div style={{padding:'14px 36px', borderBottom:'1.5px dashed var(--ink)', fontSize:13, color:'var(--ink-soft)'}}>
      Home / Training / <b style={{color:'var(--ink)'}}>Mobile Forensics — Hands-on (5 days)</b>
    </div>

    <div className="body-pad" style={{position:'relative'}}>
      <div style={{display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:32, alignItems:'start'}}>
        <div>
          <div className="sk-label">Intermediate · 5 days · Hands-on lab</div>
          <h1 className="sk-h sk-h-xl" style={{margin:'10px 0 14px'}}>Mobile Forensics —<br/>Hands-on.</h1>
          <SkLines widths={[100, 80]} />
          <div style={{display:'flex',gap:10,marginTop:16}}>
            <div className="sk-pill sk-pill-fill">Enrol in next batch</div>
            <div className="sk-pill">Download syllabus (PDF)</div>
          </div>
          <div style={{display:'flex',gap:10,marginTop:14, flexWrap:'wrap'}}>
            {['Cellebrite UFED','Magnet AXIOM','MSAB XRY','In-lab phones'].map(b => <div key={b} className="sk-pill" style={{fontSize:12}}>{b}</div>)}
          </div>
        </div>
        <SkBox style={{padding:20}}>
          <div className="sk-label" style={{marginBottom:10}}>Quick facts</div>
          <div className="stack">
            <div style={{display:'flex',justifyContent:'space-between'}}><span>Duration</span><b>5 days · 40 hrs</b></div>
            <div style={{display:'flex',justifyContent:'space-between'}}><span>Level</span><b>Intermediate</b></div>
            <div style={{display:'flex',justifyContent:'space-between'}}><span>Format</span><b>In-person / on-site</b></div>
            <div style={{display:'flex',justifyContent:'space-between'}}><span>Cohort</span><b>Max 16</b></div>
            <div style={{display:'flex',justifyContent:'space-between'}}><span>Certificate</span><b>Yes · on completion</b></div>
            <div style={{display:'flex',justifyContent:'space-between'}}><span>Next batch</span><b>Jun 10–14, 2026</b></div>
          </div>
          <SeoTag>Course + Event schema</SeoTag>
        </SkBox>
      </div>
      <SeoNote style={{top:20, right:36}}>Course schema → eligible for Google's training rich results.</SeoNote>
    </div>

    {/* Syllabus */}
    <div className="body-pad" style={{paddingTop:8, position:'relative'}}>
      <h2 className="sk-h sk-h-lg" style={{marginBottom:18}}>Syllabus</h2>
      <div className="grid-2">
        {[
          {d:'Day 1', t:'Mobile evidence fundamentals · § 65B'},
          {d:'Day 2', t:'iOS acquisition · keychain · iCloud'},
          {d:'Day 3', t:'Android acquisition · MTK / Qualcomm / EDL'},
          {d:'Day 4', t:'App data: WhatsApp, Signal, Telegram, Instagram'},
          {d:'Day 5', t:'Reporting · mock testimony · capstone case'},
        ].map(d => (
          <SkBox key={d.d} style={{padding:18}}>
            <div className="sk-label" style={{marginBottom:8}}>{d.d}</div>
            <div style={{fontSize:16, marginBottom:8}}>{d.t}</div>
            <SkLines widths={[100, 75]} />
          </SkBox>
        ))}
      </div>
      <AiNote style={{top:18, right:36}}>Structured day-by-day = LLM-friendly summary.</AiNote>
    </div>

    {/* Upcoming dates */}
    <div className="body-pad" style={{paddingTop:8}}>
      <h2 className="sk-h sk-h-lg" style={{marginBottom:18}}>Upcoming batches</h2>
      <div className="stack">
        {[
          {d:'Jun 10–14, 2026', l:'Bengaluru lab', s:'6 seats left'},
          {d:'Jul 22–26, 2026', l:'Delhi NCR', s:'Open'},
          {d:'Sep 9–13, 2026', l:'Mumbai', s:'Open'},
        ].map(b => (
          <SkBox key={b.d} style={{padding:'14px 18px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div>
              <div style={{fontSize:16}}>{b.d}</div>
              <div className="sk-label" style={{marginTop:4}}>{b.l}</div>
            </div>
            <div style={{display:'flex',gap:14,alignItems:'center'}}>
              <span className="sk-label">{b.s}</span>
              <div className="sk-pill sk-pill-fill" style={{fontSize:13}}>Enrol →</div>
            </div>
          </SkBox>
        ))}
      </div>
    </div>

    {/* Instructor */}
    <div className="body-pad" style={{paddingTop:8}}>
      <h2 className="sk-h sk-h-lg" style={{marginBottom:18}}>Your instructor</h2>
      <SkBox style={{padding:20, display:'grid', gridTemplateColumns:'80px 1fr', gap:18, alignItems:'start'}}>
        <SkImg label="" style={{width:80, height:80, borderRadius:'50%'}}/>
        <div>
          <div style={{fontSize:18}}>Name Surname</div>
          <div className="sk-label" style={{marginBottom:8}}>Principal Examiner · EnCE · GCFA · CHFI · 10 yrs</div>
          <SkLines widths={[100, 80]} />
        </div>
      </SkBox>
    </div>

    <div style={{height:24}}></div>
  </PageFrame>
);

// ---------- LAB CAPABILITIES ----------
const LabCapabilitiesPage = () => (
  <PageFrame title="L1 — Lab Capabilities" slug="/lab-capabilities" url="cybereye.com/lab-capabilities" activeNav="About">
    <div style={{padding:'14px 36px', borderBottom:'1.5px dashed var(--ink)', fontSize:13, color:'var(--ink-soft)'}}>
      Home / About / <b style={{color:'var(--ink)'}}>Lab Capabilities</b>
    </div>

    <div className="body-pad" style={{position:'relative'}}>
      <h1 className="sk-h sk-h-xl" style={{margin:'0 0 14px'}}>Inside the lab.</h1>
      <SkLines widths={[60]} />
      <SeoNote style={{top:20, right:36}}>Demonstrates capability + tooling = E-E-A-T + procurement trust.</SeoNote>
    </div>

    {/* Lab photo strip */}
    <div className="body-pad" style={{paddingTop:0}}>
      <div className="grid-3">
        {['workstations','chip-off station','faraday room'].map(l => (
          <SkImg key={l} label={l} style={{height: 200}} />
        ))}
      </div>
    </div>

    {/* Tooling */}
    <div className="body-pad" style={{paddingTop:8}}>
      <h2 className="sk-h sk-h-lg" style={{marginBottom:18}}>Tooling stack</h2>
      <div className="grid-4">
        {[
          {c:'Mobile', tools:['Cellebrite UFED', 'Magnet AXIOM', 'MSAB XRY', 'Oxygen Detective']},
          {c:'Disk / Computer', tools:['EnCase Forensic', 'FTK Imager', 'X-Ways', 'Autopsy']},
          {c:'Memory / Malware', tools:['Volatility', 'IDA Pro', 'Ghidra', 'YARA']},
          {c:'Network / Cloud', tools:['Wireshark', 'Zeek', 'CloudTrail tooling', 'Splunk']},
        ].map(cat => (
          <SkBox key={cat.c} style={{padding:16}}>
            <div className="sk-label" style={{marginBottom:8}}>{cat.c}</div>
            <ul style={{listStyle:'none', padding:0, margin:0, fontSize:14, lineHeight:1.8}}>
              {cat.tools.map(t => <li key={t}>· {t}</li>)}
            </ul>
          </SkBox>
        ))}
      </div>
    </div>

    {/* SOPs */}
    <div className="body-pad" style={{paddingTop:8}}>
      <h2 className="sk-h sk-h-lg" style={{marginBottom:18}}>SOPs & evidentiary controls</h2>
      <div className="grid-3">
        {['ISO/IEC 17025 aligned','ISO/IEC 27037 (evidence)','Twin-examiner peer review','Hash verification at every stage','Tamper-evident evidence safes','CCTV in evidence rooms'].map(s => (
          <SkBox key={s} style={{padding:16, display:'flex', alignItems:'center', gap:10}}>
            <span className="diamond"></span><span style={{fontSize:14}}>{s}</span>
          </SkBox>
        ))}
      </div>
    </div>

    <div style={{height:24}}></div>
  </PageFrame>
);

// ---------- EXPERT WITNESS ----------
const ExpertWitnessPage = () => (
  <PageFrame title="E1 — Expert Witness" slug="/expert-witness" url="cybereye.com/expert-witness" activeNav="Services">
    <div style={{padding:'14px 36px', borderBottom:'1.5px dashed var(--ink)', fontSize:13, color:'var(--ink-soft)'}}>
      Home / Services / <b style={{color:'var(--ink)'}}>Expert Witness</b>
    </div>

    <div className="body-pad" style={{position:'relative'}}>
      <h1 className="sk-h sk-h-xl" style={{margin:'0 0 14px'}}>Expert witness &<br/>court testimony.</h1>
      <SkLines widths={[80]} />
      <SeoNote style={{top:20, right:36}}>"digital forensics expert witness India" — premium intent.</SeoNote>
    </div>

    <div className="body-pad" style={{paddingTop:0}}>
      <div className="grid-2">
        {[
          {t:'For prosecution', d:'Standing with cyber cells, EOWs, CIDs. § 65B-aligned reports.'},
          {t:'For defence', d:'Independent re-examination of seized evidence and prosecution exhibits.'},
        ].map(c => (
          <SkBox key={c.t} style={{padding:20}}>
            <h3 style={{margin:'0 0 8px', fontSize:20, fontWeight:'normal'}}>{c.t}</h3>
            <SkLines widths={[100, 80]} />
          </SkBox>
        ))}
      </div>
    </div>

    <div className="body-pad" style={{paddingTop:8}}>
      <h2 className="sk-h sk-h-lg" style={{marginBottom:18}}>Court appearances</h2>
      <div className="stack">
        {[
          'High Court · Commercial · Mobile evidence',
          'Sessions Court · Criminal · Cloud evidence',
          'NCLT · Insolvency · Email forensics',
        ].map(t => (
          <SkBox key={t} style={{padding:'14px 18px', display:'flex', justifyContent:'space-between'}}>
            <span>{t}</span><span className="sk-label">2024 · redacted</span>
          </SkBox>
        ))}
      </div>
    </div>

    <div style={{height:24}}></div>
  </PageFrame>
);

const CareersPage = () => (
  <PageFrame title="19 — Careers" slug="/careers" url="cybereye.com/careers" activeNav="">
    <div style={{padding:'14px 36px', borderBottom:'1.5px dashed var(--ink)', fontSize:13, color:'var(--ink-soft)'}}>
      Home / <b style={{color:'var(--ink)'}}>Careers</b>
    </div>

    <div className="body-pad" style={{position:'relative'}}>
      <h1 className="sk-h sk-h-xl" style={{margin:'0 0 14px'}}>Work on cases<br/>that matter.</h1>
      <SkLines widths={[80]} />
      <SeoNote style={{top:20, right:36}}>JobPosting schema → Google for Jobs.</SeoNote>
    </div>

    <div className="body-pad" style={{paddingTop:0}}>
      <div className="grid-3">
        {['Real casework, not theatre','Senior-only bench','Tools, training & lab time'].map(v => (
          <SkBox key={v} style={{padding:18}}>
            <div className="diamond" style={{marginBottom:8}}></div>
            <h3 style={{margin:'0 0 6px', fontSize:18, fontWeight:'normal'}}>{v}</h3>
            <SkLines widths={[100,75]} />
          </SkBox>
        ))}
      </div>
    </div>

    <div className="body-pad" style={{paddingTop:8}}>
      <h2 className="sk-h sk-h-lg" style={{marginBottom:18}}>Open roles</h2>
      <div className="stack">
        {[
          {t:'Mobile Forensic Examiner', l:'Bengaluru · Full-time'},
          {t:'Cloud Forensic Analyst', l:'Delhi NCR · Full-time'},
          {t:'Fraud Investigator (BFSI)', l:'Mumbai · Full-time'},
          {t:'Malware Reverse Engineer', l:'Remote (India)'},
          {t:'Training Faculty — Digital Forensics', l:'Bengaluru / on-site'},
        ].map(r => (
          <SkBox key={r.t} style={{padding:'16px 20px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div>
              <div style={{fontSize:17}}>{r.t}</div>
              <div className="sk-label" style={{marginTop:4}}>{r.l}</div>
            </div>
            <div className="sk-pill">Apply →</div>
          </SkBox>
        ))}
      </div>
    </div>

    <div style={{height:24}}></div>
  </PageFrame>
);

const LegalPage = () => (
  <PageFrame title="20 — Legal & Trust" slug="/privacy · /chain-of-custody · /terms" url="cybereye.com/privacy" activeNav="">
    <div style={{padding:'14px 36px', borderBottom:'1.5px dashed var(--ink)', fontSize:13, color:'var(--ink-soft)'}}>
      Home / <b style={{color:'var(--ink)'}}>Privacy Policy</b>
    </div>

    <div className="body-pad">
      <div style={{display:'grid', gridTemplateColumns:'240px 1fr', gap:32}}>
        <div>
          <div className="sk-label" style={{marginBottom:10}}>Legal & Trust</div>
          <ul style={{listStyle:'none', padding:0, margin:0, fontSize:14, lineHeight:1.9}}>
            <li><b>· Privacy Policy</b></li>
            <li>· Terms of Service</li>
            <li>· Chain-of-Custody Policy</li>
            <li>· Evidence Handling SOP</li>
            <li>· Confidentiality / NDA framework</li>
            <li>· Cookie Policy</li>
            <li>· DPDP Act compliance</li>
            <li>· Vulnerability Disclosure</li>
          </ul>
          <div style={{marginTop:18}}><SeoTag>trust signals</SeoTag></div>
        </div>
        <div>
          <h1 className="sk-h sk-h-lg" style={{margin:'0 0 8px'}}>Privacy Policy</h1>
          <div className="sk-label" style={{marginBottom:18}}>Last updated: Apr 1, 2026 · DPDP Act · GDPR</div>
          <div className="stack-lg">
            {['1. What we collect','2. How we use evidence material','3. Sharing & third parties','4. Your rights','5. Retention of case material','6. Cross-border transfers','7. Contact our DPO'].map(s => (
              <div key={s}>
                <h3 style={{margin:'0 0 6px', fontSize:17, fontWeight:'normal'}}>{s}</h3>
                <SkLines widths={[100,90,70]} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div style={{height:24}}></div>
  </PageFrame>
);

const FourOhFourPage = () => (
  <PageFrame title="21 — 404 Not Found" slug="/404" url="cybereye.com/...broken" activeNav="">
    <div className="body-pad" style={{textAlign:'center', padding:'80px 36px', minHeight: 380, position:'relative'}}>
      <div style={{fontSize:140, lineHeight:1, fontFamily:'Caveat, cursive'}}>404</div>
      <h1 className="sk-h sk-h-lg" style={{margin:'10px 0 14px'}}>Evidence not found.</h1>
      <div style={{maxWidth: 480, margin:'0 auto'}}>
        <SkLines widths={[100, 80]} />
      </div>
      <div style={{display:'flex', justifyContent:'center', gap:10, marginTop:24}}>
        <div className="sk-pill sk-pill-fill">Back to home</div>
        <div className="sk-pill">Search</div>
        <div className="sk-pill">Report broken link</div>
      </div>
      <div style={{marginTop:36, maxWidth:600, margin:'36px auto 0'}}>
        <div className="sk-label" style={{marginBottom:10}}>Popular pages</div>
        <div className="grid-2">
          {['Mobile Forensics','Fraud Investigation','Training catalogue','Open a case'].map(p => (
            <SkBox key={p} style={{padding:'10px 14px', textAlign:'left'}}>{p} →</SkBox>
          ))}
        </div>
      </div>
      <SeoNote style={{top:20, right:36}}>Helpful 404 → preserves crawl budget.</SeoNote>
    </div>
  </PageFrame>
);

const SearchPage = () => (
  <PageFrame title="22 — Site Search" slug="/search" url="cybereye.com/search?q=whatsapp" activeNav="">
    <div className="body-pad" style={{position:'relative'}}>
      <SkBox style={{padding:'14px 18px', display:'flex', alignItems:'center', gap:10, marginBottom:18}}>
        <span style={{fontSize:18}}>🔍</span>
        <div style={{flex:1, fontFamily:'JetBrains Mono, monospace', fontSize:14}}>whatsapp_</div>
        <span className="sk-label">112 results</span>
      </SkBox>

      <div style={{display:'grid', gridTemplateColumns:'200px 1fr', gap:32}}>
        <div>
          <div className="sk-label" style={{marginBottom:10}}>Filter</div>
          <ul style={{listStyle:'none', padding:0, margin:0, fontSize:14, lineHeight:1.9}}>
            <li><b>· All (112)</b></li>
            <li>· Services (3)</li>
            <li>· Case Files (14)</li>
            <li>· Insights (62)</li>
            <li>· Training (8)</li>
            <li>· Glossary (12)</li>
            <li>· Resources (13)</li>
          </ul>
        </div>
        <div className="stack">
          {[1,2,3,4,5].map(i => (
            <SkBox key={i} style={{padding:18}}>
              <div className="sk-label">Service · /services/mobile-forensics</div>
              <h3 style={{margin:'6px 0', fontSize:18, fontWeight:'normal'}}>Mobile Forensics — <mark style={{background:'var(--accent-soft)', color:'var(--accent)'}}>WhatsApp</mark> recovery</h3>
              <SkLines widths={[100,80]} />
            </SkBox>
          ))}
        </div>
      </div>
    </div>
    <div style={{height:24}}></div>
  </PageFrame>
);

// ---------- llms.txt ----------
const LlmsTxtPage = () => (
  <div className="page" style={{width: 980}}>
    <div className="page-title-bar">
      <h2>23 — /llms.txt + /llms-full.txt</h2>
      <div className="meta">AI / LLM discoverability files · plain text</div>
    </div>
    <div className="page-frame">
      <Browser url="cybereye.com/llms.txt" />
      <div style={{padding:32, fontFamily:'JetBrains Mono, monospace', fontSize:13, lineHeight:1.65, background:'var(--paper)', whiteSpace:'pre-wrap'}}>
{`# Cyber Eye Intelligence

> Digital forensics, fraud investigation and cyber training for law
> enforcement, legal, corporate and government. Court-admissible reports.
> Chain of custody. ISO 17025-aligned lab. 24/7 incident response.

## Services
- [Mobile Forensics](https://cybereye.com/services/mobile-forensics): iOS, Android, deleted data recovery (WhatsApp, Signal), § 65B reports.
- [Cloud Forensics](https://cybereye.com/services/cloud-forensics): Google Workspace, Microsoft 365, AWS, SaaS evidence preservation.
- [Insider Investigation](https://cybereye.com/services/insider-investigation): Data exfiltration, IP theft, employee misconduct.
- [Malware & Intrusion Investigation](https://cybereye.com/services/malware-intrusion): Triage, scoping, attribution, remediation.
- [Email Authentication & Forensics](https://cybereye.com/services/email-authentication): Header analysis, BEC, phishing chain reconstruction.
- [Fraud Investigation](https://cybereye.com/services/fraud-investigation): Financial, identity, insurance and corporate fraud casework.
- [Expert Witness](https://cybereye.com/expert-witness): Court testimony and independent re-examination.

## Sectors
- [Law Enforcement & Police](https://cybereye.com/sectors/law-enforcement)
- [Legal & Litigation](https://cybereye.com/sectors/legal)
- [Corporate Enterprise](https://cybereye.com/sectors/corporate)
- [Government Agencies](https://cybereye.com/sectors/government)
- [BFSI & Insurance](https://cybereye.com/sectors/bfsi)

## Training
- [Cyber Eye Academy](https://cybereye.com/training)
- [Police curriculum](https://cybereye.com/training/police)
- [Corporate curriculum](https://cybereye.com/training/corporate)
- [Course catalogue](https://cybereye.com/training#catalogue)

## Resources
- [Glossary](https://cybereye.com/glossary): 200+ digital forensics term definitions.
- [Fraud Reports](https://cybereye.com/resources/fraud-reports): Quarterly intelligence.
- [Sample Forensic Reports](https://cybereye.com/resources): Redacted exhibits.

## Optional
- [About](https://cybereye.com/about)
- [Examiners](https://cybereye.com/team) — named experts with credentials
- [Case Files](https://cybereye.com/case-files) — outcomes with measurable impact
- [FAQ](https://cybereye.com/faq)
- [Full content index](https://cybereye.com/llms-full.txt)`}
      </div>
      <div style={{padding:'18px 32px', borderTop:'1.5px dashed var(--ink)', background:'var(--ai-soft)'}}>
        <div className="sk-label" style={{color:'var(--ai)', marginBottom:6}}>Why /llms.txt?</div>
        <div style={{fontSize:14, lineHeight:1.5}}>
          Emerging convention (like robots.txt for AI) — gives ChatGPT, Perplexity, Claude and others a clean, machine-readable index of your most citation-worthy URLs. Pair with /llms-full.txt (concatenated markdown of every page) for richer ingestion.
        </div>
      </div>
    </div>
  </div>
);

// ---------- robots / sitemap ----------
const RobotsSitemapPage = () => (
  <div className="page" style={{width: 980}}>
    <div className="page-title-bar">
      <h2>24 — robots.txt + sitemap.xml</h2>
      <div className="meta">Crawl plumbing · don't ship a site without these</div>
    </div>
    <div className="page-frame">
      <Browser url="cybereye.com/robots.txt + /sitemap.xml" />
      <div style={{padding:24, display:'grid', gridTemplateColumns:'1fr 1fr', gap: 20}}>
        <div>
          <div className="sk-label" style={{marginBottom:8}}>/robots.txt</div>
          <SkBox style={{padding:18, fontFamily:'JetBrains Mono, monospace', fontSize:12, lineHeight:1.6, whiteSpace:'pre-wrap'}}>
{`User-agent: *
Allow: /
Disallow: /search
Disallow: /thank-you/

# AI crawlers — explicit allow
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: https://cybereye.com/sitemap.xml`}
          </SkBox>
        </div>
        <div>
          <div className="sk-label" style={{marginBottom:8}}>/sitemap.xml (index)</div>
          <SkBox style={{padding:18, fontFamily:'JetBrains Mono, monospace', fontSize:12, lineHeight:1.6, whiteSpace:'pre-wrap'}}>
{`<?xml version="1.0"?>
<sitemapindex>
  <sitemap><loc>/sitemap-pages.xml</loc></sitemap>
  <sitemap><loc>/sitemap-services.xml</loc></sitemap>
  <sitemap><loc>/sitemap-sectors.xml</loc></sitemap>
  <sitemap><loc>/sitemap-case-files.xml</loc></sitemap>
  <sitemap><loc>/sitemap-training.xml</loc></sitemap>
  <sitemap><loc>/sitemap-insights.xml</loc></sitemap>
  <sitemap><loc>/sitemap-glossary.xml</loc></sitemap>
  <sitemap><loc>/sitemap-locations.xml</loc></sitemap>
</sitemapindex>`}
          </SkBox>
        </div>
      </div>
      <div style={{padding:'18px 24px', borderTop:'1.5px dashed var(--ink)', background:'var(--accent-soft)'}}>
        <div className="sk-label" style={{color:'var(--accent)', marginBottom:6}}>SEO foundation</div>
        <div style={{fontSize:14, lineHeight:1.5}}>
          Submit /sitemap.xml in Google Search Console + Bing Webmaster Tools. Split sitemaps by content type so crawl errors are isolated and indexation is easy to diagnose.
        </div>
      </div>
    </div>
  </div>
);

Object.assign(window, {
  PricingPage, ContactPage, TeamPage, LocationsHubPage,
  TrainingHubPage, TrainingCoursePage, LabCapabilitiesPage, ExpertWitnessPage,
  CareersPage, LegalPage, FourOhFourPage, SearchPage,
  LlmsTxtPage, RobotsSitemapPage,
});
