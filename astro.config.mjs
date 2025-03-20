import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://dchiplth.github.io',
    integrations: [mdx(), sitemap(), tailwind()],
    vite: {
        resolve: {
          alias: {
            '@content': '/src/content',
          },
        },
      },
});

