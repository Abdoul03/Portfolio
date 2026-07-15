import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Relative base so the build works both at a domain root
  // (user page) and under a sub-path (project page) on GitHub Pages.
  base: './',
  plugins: [react()],
})
