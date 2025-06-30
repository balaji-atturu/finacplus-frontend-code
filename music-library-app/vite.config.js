// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import federation from '@originjs/vite-plugin-federation';

// export default defineConfig({
//   plugins: [
//     react(),
//     federation({
//       name: 'musicLibrary',
//       filename: 'remoteEntry.js', // Required for remote
//       exposes: {
//         './MusicLibrary': './src/components/MusicLibrary.jsx', // Expose your component
//       },
//       shared: ['react', 'react-dom'], // Shared dependencies
//     }),
//   ],
//   server: { port: 5001 }, // Dev server
//   preview: { port: 5002 }, // Production preview
//   build: { target: 'esnext' }, // Required for federation
// });


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'musicLibrary',
      filename: 'remoteEntry.js',
      exposes: {
        './MusicLibrary': './src/components/MusicLibrary.jsx'
      },
      shared: ['react', 'react-dom']
    })
  ],
  base: '/', // Critical for Netlify
  server: { port: 5001 },
  preview: { 
    port: 5002,
    strictPort: true 
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: true,
    cssCodeSplit: false // Prevents style issues
  }
});