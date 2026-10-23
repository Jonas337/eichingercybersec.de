import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.eichingercybersec.de',
  integrations: [sitemap()],
  // GitHub Pages cannot send custom response headers, so the CSP is delivered
  // as a <meta http-equiv> tag. Astro hashes every inline script and style it
  // emits and adds those hashes to script-src/style-src automatically.
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "base-uri 'self'",
        "object-src 'none'",
        "form-action 'self'",
        "img-src 'self' data:",
        "font-src 'self' https://fonts.gstatic.com",
        "connect-src 'self'",
        "frame-src https://app.formbricks.com",
        'upgrade-insecure-requests',
      ],
      styleDirective: {
        resources: ["'self'", 'https://fonts.googleapis.com'],
      },
      scriptDirective: {
        resources: ["'self'"],
      },
    },
  },
});
