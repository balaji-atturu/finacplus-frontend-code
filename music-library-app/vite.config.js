// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import federation from '@originjs/vite-plugin-federation';

// export default defineConfig({
//   server: {
//     port: 3001,
//     host: 'localhost',
//     cors: true,
//     headers: {
//       "Access-Control-Allow-Origin": "*"
//     }
//   },
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
//     minify: false,
//     cssCodeSplit: false,
//     rollupOptions: {
//       output: {
//         format: 'esm',
//         entryFileNames: '[name].js', 
//         minifyInternalExports: false
//       }
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
      filename: 'remoteEntry.js',
      exposes: {
        './MusicLibrary': './src/components/SongsList.jsx'
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: true,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        format: 'esm',
        entryFileNames: '[name].js',
        minifyInternalExports: false
      }
    }
  },
  preview: {
    port: 3001,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
});