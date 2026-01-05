import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://karun-hub.github.io',
  base: '/OutBox/',          // REQUIRED for your repo
  output: 'static',          // REQUIRED for GitHub Pages
  integrations: [tailwind(), react()],
});
