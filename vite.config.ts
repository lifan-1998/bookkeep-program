import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { processExpression } from '@vue/compiler-core'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})

