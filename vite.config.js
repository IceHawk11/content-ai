import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Remove base: './' - this can cause issues with Vercel's routing
  server: {
    open: true,
    port: 5173,
    proxy: {
      '/api': {
        target: process.env.VITE_BACKEND_URL || 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false, // Set to true if you want source maps in production
  },
  // Define environment variables that should be replaced at build time
  define: {
    'process.env': {},
  },
})