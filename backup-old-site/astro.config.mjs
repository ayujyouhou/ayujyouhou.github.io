// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ayujyouhou.github.io',   // ← GitHub Pages のURLを追加
  vite: {
    plugins: [tailwindcss()],
  },
});
