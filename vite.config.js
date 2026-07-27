import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The site is served from https://<username>.github.io/portfolio/, so every asset
// URL needs the repo name in front of it. If you rename the repo, change this
// string and nothing else. If you later move to a custom domain or a
// <username>.github.io repo, set base to '/'.
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
