


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
//         './MusicLibrary': './src/components/SongsList.jsx'
//       },
//       shared: ['react', 'react-dom']
//     })
//   ],
//   build: {
//     modulePreload: false,
//     target: 'esnext',
//     minify: true,
//     cssCodeSplit: false,
//     rollupOptions: {
//       output: {
//         format: 'esm',
//         entryFileNames: '[name].js',
//         minifyInternalExports: false
//       }
//     }
//   },
//   preview: {
//     port: 3001,
//     headers: {
//       "Access-Control-Allow-Origin": "*"
//     }
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
      filename: 'remoteEntry.js', // Fixed filename (no hash)
      exposes: {
        './MusicLibrary': './src/components/SongsList.jsx'
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        format: 'esm',
        entryFileNames: 'assets/[name].js', // No hash in filename
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
});
