// Mount the design canvas with all wireframe pages arranged in sections

const App = () => {
  return (
    <DesignCanvas title="Cyber Eye Intelligence · Site Wireframes" subtitle="Digital forensics, fraud investigation & training · SEO + AI discoverability">
      <DCSection id="map" title="00 · The Map">
        <DCArtboard id="sitemap" label="Sitemap & rationale" width={1400} height={1700}>
          <SitemapPage />
        </DCArtboard>
      </DCSection>

      <DCSection id="core" title="Core pages">
        <DCArtboard id="home" label="01 · Homepage" width={1280} height={2960}>
          <HomePage />
        </DCArtboard>
        <DCArtboard id="about" label="02 · About" width={1280} height={1700}>
          <AboutPage />
        </DCArtboard>
        <DCArtboard id="services-hub" label="03 · Services Hub" width={1280} height={2100}>
          <ServicesHubPage />
        </DCArtboard>
        <DCArtboard id="service-detail" label="04 · Service Detail · Mobile Forensics" width={1280} height={2480}>
          <ServiceDetailPage />
        </DCArtboard>
      </DCSection>

      <DCSection id="proof" title="Sectors & proof (E-E-A-T)">
        <DCArtboard id="sectors-hub" label="05 · Sectors Hub" width={1280} height={1320}>
          <IndustriesHubPage />
        </DCArtboard>
        <DCArtboard id="sector-detail" label="06 · Sector Detail · Law Enforcement" width={1280} height={1880}>
          <IndustryDetailPage />
        </DCArtboard>
        <DCArtboard id="case-files-hub" label="07 · Case Files Hub" width={1280} height={1900}>
          <CaseStudiesHubPage />
        </DCArtboard>
        <DCArtboard id="case-file-detail" label="08 · Case File Detail (template)" width={1280} height={2180}>
          <CaseStudyDetailPage />
        </DCArtboard>
      </DCSection>

      <DCSection id="training" title="Training (Cyber Eye Academy)">
        <DCArtboard id="training-hub" label="T1 · Training Hub" width={1280} height={2080}>
          <TrainingHubPage />
        </DCArtboard>
        <DCArtboard id="training-course" label="T2 · Course Detail (template)" width={1280} height={1840}>
          <TrainingCoursePage />
        </DCArtboard>
      </DCSection>

      <DCSection id="content" title="Content engine (SEO + AI fuel)">
        <DCArtboard id="blog-hub" label="09 · Insights Hub" width={1280} height={2080}>
          <BlogHubPage />
        </DCArtboard>
        <DCArtboard id="blog-post" label="10 · Blog Post (template)" width={1280} height={2280}>
          <BlogPostPage />
        </DCArtboard>
        <DCArtboard id="resources" label="11 · Resources / Reports" width={1280} height={1560}>
          <ResourcesHubPage />
        </DCArtboard>
        <DCArtboard id="glossary" label="12 · Glossary ★ AI" width={1280} height={1620}>
          <GlossaryPage />
        </DCArtboard>
        <DCArtboard id="faq" label="13 · FAQ" width={1280} height={1380}>
          <FaqPage />
        </DCArtboard>
        <DCArtboard id="compare" label="14 · Comparison (template)" width={1280} height={1480}>
          <ComparePage />
        </DCArtboard>
      </DCSection>

      <DCSection id="utility" title="Conversion & supporting">
        <DCArtboard id="engagement" label="15 · Engagement Models" width={1280} height={1500}>
          <PricingPage />
        </DCArtboard>
        <DCArtboard id="contact" label="16 · Contact" width={1280} height={1360}>
          <ContactPage />
        </DCArtboard>
        <DCArtboard id="examiners" label="17 · Examiners (Team)" width={1280} height={2540}>
          <TeamPage />
        </DCArtboard>
        <DCArtboard id="locations" label="18 · Locations (local SEO)" width={1280} height={1480}>
          <LocationsHubPage />
        </DCArtboard>
        <DCArtboard id="lab" label="L1 · Lab Capabilities" width={1280} height={1340}>
          <LabCapabilitiesPage />
        </DCArtboard>
        <DCArtboard id="expert-witness" label="E1 · Expert Witness" width={1280} height={1080}>
          <ExpertWitnessPage />
        </DCArtboard>
        <DCArtboard id="careers" label="19 · Careers" width={1280} height={1380}>
          <CareersPage />
        </DCArtboard>
        <DCArtboard id="legal" label="20 · Legal & Trust" width={1280} height={1240}>
          <LegalPage />
        </DCArtboard>
      </DCSection>

      <DCSection id="edge" title="Edge cases & crawl plumbing">
        <DCArtboard id="404" label="21 · 404" width={1280} height={780}>
          <FourOhFourPage />
        </DCArtboard>
        <DCArtboard id="search" label="22 · Site Search" width={1280} height={1020}>
          <SearchPage />
        </DCArtboard>
        <DCArtboard id="llms" label="23 · /llms.txt ★ AI" width={980} height={1000}>
          <LlmsTxtPage />
        </DCArtboard>
        <DCArtboard id="robots" label="24 · robots.txt + sitemap.xml" width={980} height={780}>
          <RobotsSitemapPage />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
