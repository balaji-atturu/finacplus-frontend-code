// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import federation from '@originjs/vite-plugin-federation';

// export default defineConfig({
//   plugins: [
//     react(),
//     federation({
//       name: 'music-library',
//       filename: 'remoteEntry.js',
//       exposes: {
//         './MusicLibrary': './src/components/MusicLibrary.jsx' // Your exposed component
//       },
//       shared: ['react', 'react-dom']
//     })
//   ],
//   build: {
//     modulePreload: false,
//     target: 'esnext',
//     minify: false,
//     cssCodeSplit: false
//   }
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'music-library',
      filename: 'remoteEntry.js',
      exposes: {
        './MusicLibrary': './src/components/MusicLibrary.jsx'
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false, // Critical for federation
    rollupOptions: {
      output: {
        format: 'esm',
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    }
  },
  server: {
    port: 5001,
    strictPort: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,OPTIONS',
      'Content-Type': 'application/javascript'
    }
  },
  preview: {
    port: 5001,
    strictPort: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,OPTIONS',
      'Content-Type': 'application/javascript'
    }
  }
});