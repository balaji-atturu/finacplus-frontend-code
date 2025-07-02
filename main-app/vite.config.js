


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import federation from '@originjs/vite-plugin-federation';

// export default defineConfig({
//   plugins: [
//     react(),
//     federation({
//       name: 'main-app',
//       remotes: {
//        'music-library': 'https://music-library-separate.netlify.app/assets/remoteEntry.js'
//        // 'music-library': 'http://localhost:3001/assets/remoteEntry.js'
//       },
//       shared: ['react', 'react-dom']
//     })
//   ],
//   build: {
//     target: 'esnext',
//     minify: true,
//     cssCodeSplit: false
//   },
//   preview: {
//     port: 3000
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
        'music-library': 'https://music-library-separate.netlify.app/assets/remoteEntry.[hash].js'
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    target: 'esnext',
    cssCodeSplit: false
  }
});