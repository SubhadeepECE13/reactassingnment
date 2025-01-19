import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Ensure it binds to all interfaces
    port: process.env.PORT || 3000, // Use a default port if not specified
  },
})
