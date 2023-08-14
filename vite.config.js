import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/portfolio-website/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'contact.html'),
        about: resolve(__dirname, 'about.html'),
        work: resolve(__dirname, 'work.html'),
      },
    },
  },
});
