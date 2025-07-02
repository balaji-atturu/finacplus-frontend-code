// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import federation from '@originjs/vite-plugin-federation';

// export default defineConfig({
//   server: {
//     port: 3000,
//     host: 'localhost'
//   },
//   plugins: [
//     react(),
//     federation({
//       name: 'main-app',
//       remotes: {
//         'music-library': 'http://localhost:4173/assets/remoteEntry.js'
//       },
//       shared: ['react', 'react-dom']
//     })
//   ],
//   build: {
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
      name: 'main-app',
      remotes: {
        'music-library': 'https://music-library-separate.netlify.app/assets/remoteEntry.js'
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    target: 'esnext',
    minify: true,
    cssCodeSplit: false
  },
  preview: {
    port: 3000
  }
});