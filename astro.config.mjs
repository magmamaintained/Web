import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    build: {
      minify: false, // Minify HTML, CSS, and JS
      compressHTML: false, // Further compress HTML
      output: '[name].astro', // Customize output filenames
    },
  });