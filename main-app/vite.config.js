// // import { defineConfig } from 'vite';
// // import react from '@vitejs/plugin-react';
// // import federation from '@originjs/vite-plugin-federation';

// // export default defineConfig({
// //   plugins: [
// //     react(),
// //     federation({
// //       name: 'main_app',
// //      remotes: {
// //   musicLibrary: 'http://localhost:5002/assets/remoteEntry.js' // Remove the 'musicLibrary@' prefix
// // },
// //       shared: ['react', 'react-dom'], // Shared dependencies
// //     }),
// //   ],
// //   server: { port: 5000 }, // Host app runs here
// //   build: { target: 'esnext' },
// // });

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import federation from '@originjs/vite-plugin-federation';

// export default defineConfig({
//   plugins: [
//     react(),
//     federation({
//       name: 'main_app',
//       remotes: {
//         musicLibrary: process.env.NODE_ENV === 'production'
//           ? 'https://your-music-library.netlify.app/assets/remoteEntry.js'
//           : 'http://localhost:5002/assets/remoteEntry.js'
//       },
//       shared: ['react', 'react-dom']
//     })
//   ],
//   base: '/', // Critical for Netlify
//   server: { port: 5000 },
//   build: {
//     target: 'esnext',
//     outDir: 'dist',
//     emptyOutDir: true
//   }
// });


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import federation from '@originjs/vite-plugin-federation';

// // 1. Add this to your package.json scripts if missing
// // "scripts": {
// //   "build": "vite build --mode production",
// //   "preview": "vite preview --port 5000"
// // }

// export default defineConfig({
//   plugins: [
//     react(),
//     federation({
//       name: 'main_app',
//       remotes: {
//         // 2. Replace with your ACTUAL Netlify URL after deployment
//         musicLibrary: process.env.NODE_ENV === 'production'
//           ? 'https://your-music-library.netlify.app/assets/remoteEntry.js'
//           : 'http://localhost:5002/assets/remoteEntry.js'
//       },
//       shared: ['react', 'react-dom']
//     })
//   ],
//   // 3. Required for Netlify
//   base: '/', 
  
//   // 4. Development settings
//   server: { 
//     port: 5000,
//     strictPort: true
//   },
  
//   // 5. Production build settings
//   build: {
//     target: 'esnext',
//     outDir: 'dist',
//     emptyOutDir: true,
//     // 6. Optional: Better chunking for production
//     rollupOptions: {
//       output: {
//         manualChunks: {
//           react: ['react', 'react-dom']
//         }
//       }
//     }
//   }
// });


import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(({ mode }) => {
  // Load environment variables (VITE_ prefixed only)
  const env = loadEnv(mode, process.cwd(), 'VITE_');

  return {
    plugins: [
      react(),
      federation({
        name: 'main_app',
        remotes: {
          musicLibrary: `${env.VITE_MUSIC_LIBRARY_URL}/assets/remoteEntry.js`
        },
        shared: ['react', 'react-dom']
      })
    ],
    base: '/', // Required for Netlify
    server: {
      port: 5000,
      strictPort: true,
      cors: true
    },
    preview: {
      port: 5000,
      cors: true
    },
    build: {
      target: 'esnext',
      outDir: 'dist',
      emptyOutDir: true,
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom']
          }
        }
      }
    },
    optimizeDeps: {
      include: ['react', 'react-dom']
    }
  };
});