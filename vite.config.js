import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
  }
})

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   base: '/portfolio/',
//   plugins: [react()],
//   server: {
//     port: 8080,
//     hot: true
//   },
//   build: {
//     outDir: 'docs',
//     rollupOptions: {
//       output: {
//         entryFileNames: 'assets/index-C5K1NyVi.js',
//         chunkFileNames: 'assets/[name].js',
//         assetFileNames: 'assets/[name].[ext]'
//       }
//     }
//   }
// });
