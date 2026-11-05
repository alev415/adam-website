import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative asset URLs work on both the GitHub project URL and a custom domain.
  base: './',
}) 