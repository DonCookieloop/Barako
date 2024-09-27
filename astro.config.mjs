import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()], // Keep your Tailwind integration
  api: {
    // Allow CORS for testing from different origins
    cors: {
      origin: '*', 
    },
  },
});