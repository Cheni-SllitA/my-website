// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/my-website/', // 👈 important for GitHub Pages
})
// This configuration sets up Vite for a React project and specifies the base path for deployment on GitHub Pages.