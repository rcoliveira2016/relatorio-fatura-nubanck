import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import { resolve } from 'path';


export default defineConfig({
  resolve:{
    alias:{
      '@' : resolve(__dirname, './src')
    },
  },
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),

    quasar()
  ]
})
