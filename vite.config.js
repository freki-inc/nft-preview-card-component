import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages
  base: 'https://freki-inc.github.io/nft-preview-card-component/',
})
