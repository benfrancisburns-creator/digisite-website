import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.digiscaff.co.uk',
  compressHTML: true,
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/terms') && !page.includes('/privacy'),
    }),
  ],
});
