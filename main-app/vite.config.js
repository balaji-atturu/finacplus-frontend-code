// import { defineConfig, loadEnv } from 'vite';
// import react from '@vitejs/plugin-react';
// import federation from '@originjs/vite-plugin-federation';

// export default defineConfig(({ mode }) => {
//   // Load environment variables
//   const env = loadEnv(mode, process.cwd(), 'VITE_');

//   return {
//     plugins: [
//       react(),
//       federation({
//         name: 'main_app',
//         remotes: {
//           musicLibrary: `${env.VITE_MUSIC_LIBRARY_URL || 'https://your-music-library.netlify.app'}/assets/remoteEntry.js`
//         },
//         shared: ['react', 'react-dom', 'react-router-dom', 'lodash'] // Added lodash here
//       })
//     ],
//     base: '/',
//     server: {
//       port: 5000,
//       strictPort: true,
//       cors: true,
//       hmr: {
//         protocol: 'ws',
//         host: 'localhost'
//       }
//     },
//     preview: {
//       port: 5000,
//       cors: true
//     },
//     build: {
//       target: 'esnext',
//       outDir: 'dist',
//       emptyOutDir: true,
//       minify: 'terser',
//       cssCodeSplit: false,
//       rollupOptions: {
//         external: ['lodash'], // Mark lodash as external
//         output: {
//           globals: {
//             'lodash': '_' // Define global variable name
//           },
//           manualChunks: {
//             react: ['react', 'react-dom', 'react-router-dom'],
//             vendor: ['lodash', 'axios'] // Ensure lodash is chunked
//           }
//         }
//       }
//     },
//     optimizeDeps: {
//       include: [
//         'react',
//         'react-dom',
//         'react-router-dom',
//         'lodash' // Added for dependency optimization
//       ],
//       exclude: ['js-big-decimal']
//     }
//   };
// });


import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  
  return {
    plugins: [
      react(),
      federation({
        name: 'main_app',
        remotes: {
          musicLibrary: 'https://music-library-separate.netlify.app/assets/remoteEntry.js'
        },
        shared: ['react', 'react-dom', 'react-router-dom', 'lodash']
      })
    ],
    base: '/',
    server: {
      port: 5000,
      strictPort: true,
      cors: true,
      hmr: {
        protocol: 'ws',
        host: 'localhost'
      }
    },
    build: {
      target: 'esnext',
      outDir: 'dist',
      minify: 'terser',
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          format: 'esm',
          globals: {
            'lodash': '_'
          }
        }
      }
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom', 'lodash'],
      exclude: ['js-big-decimal']
    }
  };
});