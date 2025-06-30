// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import federation from '@originjs/vite-plugin-federation';

// export default defineConfig({
//   plugins: [
//     react(),
//     federation({
//       name: 'musicLibrary',
//       filename: 'remoteEntry.js', // Critical for Module Federation
//       exposes: {
//         './MusicLibrary': './src/components/MusicLibrary.jsx'
//       },
//       shared: ['react', 'react-dom','lodash']
//     })
//   ],
//   base: '/', // Required for proper asset paths
//   server: {
//     port: 5001,
//     strictPort: true,
//     headers: {
//       "Access-Control-Allow-Origin": "*" // Enable CORS for dev
//     }
//   },
//   preview: {
//     port: 5002,
//     headers: {
//       "Access-Control-Allow-Origin": "*" // Enable CORS for preview
//     }
//   },
//   build: {
//     target: 'esnext', // Required for federation
//     outDir: 'dist',
//     emptyOutDir: true,
//     cssCodeSplit: false, // Prevent CSS issues
//     rollupOptions: {
//       output: {
//         // Critical for proper file structure
//         entryFileNames: 'assets/[name].js',
//         chunkFileNames: 'assets/[name].js',
//         assetFileNames: 'assets/[name].[ext]',
//         // Ensure federation files are properly named
//         format: 'esm' // ES Modules format
//       }
//     }
//   },
//   optimizeDeps: {
//     include: ['react', 'react-dom'], // Pre-bundle dependencies
//     exclude: ['federation-runtime'] // Required for Module Federation
//   }
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'musicLibrary',
      filename: 'remoteEntry.js', // Must match the main app's remote URL
      exposes: {
        './MusicLibrary': './src/components/MusicLibrary.jsx'
      },
      shared: [
        'react',
        'react-dom',
        'lodash'
      ]
    })
  ],
  base: '/', // Critical for correct asset paths
  server: {
    port: 5001,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    },
    hmr: {
      protocol: 'ws',
      host: 'localhost'
    }
  },
  preview: {
    port: 5001,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  build: {
    target: 'esnext', // Required for Module Federation
    outDir: 'dist',
    minify: 'terser', // Added minification
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
        format: 'esm', // ES Modules required
        globals: {
          'lodash': '_' // Define global for external deps
        }
      },
      external: ['lodash'] // Mark as external if shared
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'lodash'],
    exclude: ['federation-runtime'] // Critical for Module Federation
  }
});