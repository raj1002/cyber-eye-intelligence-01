/** @type {import('@lhci/cli').LighthouseRcConfig} */
module.exports = {
  ci: {
    collect: {
      // Serves the production build from `npm run build` (CI runs the build first).
      startServerCommand: 'npm run start',
      startServerReadyPattern: 'Ready',
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/services',
        'http://localhost:3000/contact',
      ],
      numberOfRuns: 2,
    },
    upload: {
      // Reports stay on the runner and are uploaded as a workflow artifact, not to public storage.
      target: 'filesystem',
      outputDir: '.lighthouseci',
    },
    assert: {
      assertions: {
        // Performance gates from CLAUDE.md
        'categories:performance': ['warn', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:seo': ['warn', { minScore: 0.9 }],

        // Core Web Vitals
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['warn', { maxNumericValue: 300 }],
        'first-contentful-paint': ['warn', { maxNumericValue: 2000 }],
      },
    },
  },
};
