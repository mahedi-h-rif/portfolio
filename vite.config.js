import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Get repository name from environment or default to 'portfolio'
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'portfolio'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '/',
})

