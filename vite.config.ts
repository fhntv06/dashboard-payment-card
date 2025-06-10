import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    /*here*/
    hmr: { overlay: false }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // or "modern"
      }
    }
  },
  plugins: [react(), basicSsl()],
  build: {
    outDir: './build'
  },
  base: '/' // for deploy github pages
})
