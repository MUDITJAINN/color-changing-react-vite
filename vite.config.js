import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://muditjainn.github.io/color-changing-react-vite/',
  plugins: [react()],
})
