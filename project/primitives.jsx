// Shared wireframe primitives — chrome, nav, footer, sketchy boxes
const { Fragment } = React;

const Browser = ({ url }) => (
  <div className="browser-bar">
    <div className="dots">
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </div>
    <div className="url">{url}</div>
    <span style={{opacity:0.5}}>⟳</span>
  </div>
);

const Nav = ({ active }) => {
  const links = ['Services', 'Sectors', 'Case Files', 'Training', 'Insights', 'About', 'Contact'];
  return (
    <div className="nav">
      <div style={{display:'flex',alignItems:'center',gap:10,fontSize:18}}>
        <span className="eye"></span>
        <strong>Cyber Eye Intelligence</strong>
      </div>
      <div className="nav-links" style={{fontSize:14}}>
        {links.map(l => (
          <span key={l} style={{
            borderBottom: active === l ? '2px solid var(--ink)' : 'none',
            paddingBottom: 2,
          }}>{l}</span>
        ))}
      </div>
      <div className="nav-cta">Open a case →</div>
    </div>
  );
};

const Footer = () => (
  <div className="footer">
    <div>
      <div style={{display:'flex',alignItems:'center',gap:8,fontSize:18,marginBottom:8}}>
        <span className="eye"></span>
        <strong>Cyber Eye Intelligence</strong>
      </div>
      <div style={{fontSize:13,color:'var(--ink-soft)',maxWidth:240}}>
        Digital forensics, fraud investigation & cyber training for law enforcement, legal and enterprise.
      </div>
      <div style={{marginTop:14,display:'flex',gap:8,flexWrap:'wrap'}}>
        <span className="seo-tag">LocalBusiness</span>
        <span className="seo-tag">OrgSchema</span>
        <span className="ai-tag">llms.txt</span>
      </div>
    </div>
    <div>
      <h5>Services</h5>
      <ul>
        <li>Mobile Forensics</li>
        <li>Cloud Forensics</li>
        <li>Insider Investigation</li>
        <li>Malware & Intrusion</li>
        <li>Email Authentication</li>
        <li>Fraud Investigation</li>
      </ul>
    </div>
    <div>
      <h5>Sectors</h5>
      <ul>
        <li>Law Enforcement</li>
        <li>Legal & Litigation</li>
        <li>Corporate</li>
        <li>Government</li>
        <li>BFSI & Insurance</li>
      </ul>
    </div>
    <div>
      <h5>Training</h5>
      <ul>
        <li>For Police</li>
        <li>For Corporate</li>
        <li>Course catalogue</li>
        <li>Certifications</li>
        <li>Calendar</li>
      </ul>
    </div>
    <div>
      <h5>Resources</h5>
      <ul>
        <li>Case Files</li>
        <li>Insights / Blog</li>
        <li>Forensic Reports</li>
        <li>Glossary</li>
        <li>FAQ</li>
      </ul>
    </div>
  </div>
);

const PageTitleBar = ({ title, url, slug }) => (
  <div className="page-title-bar">
    <h2>{title}</h2>
    <div className="meta">{slug} · {url}</div>
  </div>
);

const PageFrame = ({ title, slug, url, activeNav, children, hideNav, hideFooter }) => (
  <div className="page">
    <PageTitleBar title={title} slug={slug} url={url} />
    <div className="page-frame">
      <Browser url={url} />
      {!hideNav && <Nav active={activeNav} />}
      {children}
      {!hideFooter && <Footer />}
    </div>
  </div>
);

const SkBox = ({ children, style, dashed, fill, className = '' }) => (
  <div
    className={`${dashed ? 'sk-box-dashed' : fill ? 'sk-box-fill' : 'sk-box'} ${className}`}
    style={style}
  >{children}</div>
);

const SkImg = ({ label = 'image', style }) => (
  <div className="sk-img" style={style}>{label}</div>
);

const SkLines = ({ widths = [100, 90, 70] }) => (
  <div className="stack">
    {widths.map((w, i) => <div key={i} className="sk-line thin" style={{width: w + '%'}}></div>)}
  </div>
);

const SeoTag = ({ children }) => <span className="seo-tag">{children}</span>;
const AiTag = ({ children }) => <span className="ai-tag">{children}</span>;

const SeoNote = ({ children, style }) => (
  <div className="seo-note" style={style}>{children}</div>
);
const AiNote = ({ children, style }) => (
  <div className="ai-note" style={style}>{children}</div>
);

Object.assign(window, {
  Browser, Nav, Footer, PageTitleBar, PageFrame,
  SkBox, SkImg, SkLines, SeoTag, AiTag, SeoNote, AiNote,
});
