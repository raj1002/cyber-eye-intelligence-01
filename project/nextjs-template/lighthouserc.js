/** @type {import('@lhci/cli').LighthouseRcConfig} */
module.exports = {
  ci: {
    collect: {
      // Audits a production server already running on :3000 (`npm run build && npm run start`).
      // CI starts and warms it up in .github/workflows/lighthouse.yml.
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/services',
        'http://localhost:3000/contact',
      ],
      // Three runs per page, judged on the median (see assert below).
      numberOfRuns: 3,
    },
    upload: {
      // Reports stay on the runner and are uploaded as a workflow artifact, not to public storage.
      target: 'filesystem',
      outputDir: '.lighthouseci',
    },
    assert: {
      // lhci's default ('optimistic') judges each page on its best run, which hides real
      // regressions and lets one lucky run pass. The median of 3 tolerates a single outlier.
      assertions: {
        // Performance gates from CLAUDE.md
        'categories:performance': ['warn', { minScore: 0.9, aggregationMethod: 'median' }],
        'categories:accessibility': ['error', { minScore: 0.95, aggregationMethod: 'median' }],
        'categories:best-practices': ['warn', { minScore: 0.9, aggregationMethod: 'median' }],
        'categories:seo': ['warn', { minScore: 0.9, aggregationMethod: 'median' }],

        // Core Web Vitals
        'largest-contentful-paint': ['error', { maxNumericValue: 2500, aggregationMethod: 'median' }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1, aggregationMethod: 'median' }],
        'total-blocking-time': ['warn', { maxNumericValue: 300, aggregationMethod: 'median' }],
        'first-contentful-paint': ['warn', { maxNumericValue: 2000, aggregationMethod: 'median' }],
      },
    },
  },
};
