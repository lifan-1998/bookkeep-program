import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { processExpression } from '@vue/compiler-core'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy:{
      '/api': {
        target: 'http://192.168.2.213:9100',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})

