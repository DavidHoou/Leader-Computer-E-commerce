import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  mime: {
    'js': 'application/javascript',
  },
  plugins: [react()],
})
