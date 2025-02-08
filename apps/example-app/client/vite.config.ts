import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 2000,
    host: true,
    cors: {
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    },
    allowedHosts: ['docker-monorepo-boilerplate-ci-cd-client-vi5z.onrender.com', 'docker-monorepo-boilerplate-ci-cd-client.onrender.com' ],
  },
})
