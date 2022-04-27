import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const { resolve } = require("path") 
import tsconfigPaths from 'vite-tsconfig-paths'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tsconfigPaths()],
  // resolve: {
  //   alias: [{ find: '@', replacement: '/src' }],
  //  },
  // resolve: {
  //   alias: [
  //     {
  //       find:"Assets",replacement:resolve(__dirname,"/src/Assets")
  //     },
  //     {
  //       find:"Components",replacement:resolve(__dirname,"/src/Components")
  //     },
  //     {
  //       find: "@Modules", replacement: resolve(__dirname, '/src/Components/Modules/*')
  //     },
  //     {
  //       find: "@Pages", replacement: resolve(__dirname, '/src/Components/Pages/*')
  //     },
  //     {
  //       find :"@Common",replacement:resolve(__dirname,"/src/Components/Common/*")
  //     }
  //   ]
  // },
  // build: {
  //   rollupOptions: {
  //     input: {
  //       main: resolve(__dirname, 'index.html'),
  //     }
  //   }
  // }
})
