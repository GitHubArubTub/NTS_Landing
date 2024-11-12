import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker';
export default defineConfig({
  plugins: [
    checker({ typescript: false }), react()
  ],
})