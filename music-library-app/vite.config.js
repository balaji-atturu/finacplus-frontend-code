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

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import federation from '@originjs/vite-plugin-federation';

// export default defineConfig({
//   plugins: [
//     react(),
//     federation({
//       name: 'musicLibrary',
//       filename: 'remoteEntry.js', // Must match the main app's remote URL
//       exposes: {
//         './MusicLibrary': './src/components/MusicLibrary.jsx'
//       },
//       shared: [
//         'react',
//         'react-dom',
//         'lodash'
//       ]
//     })
//   ],
//   base: '/', // Critical for correct asset paths
//   server: {
//     port: 5001,
//     strictPort: true,
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "GET, OPTIONS",
//       "Access-Control-Allow-Headers": "Content-Type"
//     },
//     hmr: {
//       protocol: 'ws',
//       host: 'localhost'
//     }
//   },
//   preview: {
//     port: 5001,
//     headers: {
//       "Access-Control-Allow-Origin": "*"
//     }
//   },
//   build: {
//     target: 'esnext', // Required for Module Federation
//     outDir: 'dist',
//     minify: 'terser', // Added minification
//     cssCodeSplit: true,
//       cssMinify: true, // Explicitly enable CSS minification

//     rollupOptions: {
//       output: {
//        rollupOptions: {
//   output: {
//     entryFileNames: 'assets/[name].[hash].js',
//     chunkFileNames: 'assets/[name].[hash].js',
//     assetFileNames: (assetInfo) => {
//       if (assetInfo.name) {
//         const ext = assetInfo.name.split('.').pop();
//         if (ext === 'css') {
//           return 'assets/[name].[hash].[ext]'; // CSS with hash
//         }
//         return 'assets/[name].[hash].[ext]'; // Other assets with hash
//       }
//       return 'assets/[name].[ext]'; // Fallback
//     }
//   }
// },
//         entryFileNames: 'assets/[name].js',
//         chunkFileNames: 'assets/[name].js',
//         assetFileNames: 'assets/[name].[ext]',
//         format: 'esm', // ES Modules required
//         globals: {
//           'lodash': '_' // Define global for external deps
//         }
//       },
//       external: ['lodash'] // Mark as external if shared
//     }
//   },
//   optimizeDeps: {
//     include: ['react', 'react-dom', 'lodash'],
//     exclude: ['federation-runtime'] // Critical for Module Federation
//   }
// });


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import federation from '@originjs/vite-plugin-federation';

// export default defineConfig({
//   plugins: [
//     react({
//       // CSS modules support
//       babel: {
//         plugins: [
//           ['babel-plugin-react-css-modules', {
//             generateScopedName: '[name]__[local]___[hash:base64:5]'
//           }]
//         ]
//       }
//     }),
//     federation({
//       name: 'musicLibrary',
//       filename: 'remoteEntry.js',
//       exposes: {
//         './MusicLibrary': './src/components/MusicLibrary.jsx'
//       },
//       shared: [
//         'react',
//         'react-dom',
//         'lodash'
//       ]
//     })
//   ],
//   base: '/',
//   server: {
//     port: 5001,
//     strictPort: true,
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "GET, OPTIONS",
//       "Access-Control-Allow-Headers": "Content-Type"
//     },
//     hmr: {
//       protocol: 'ws',
//       host: 'localhost'
//     }
//   },
//   preview: {
//     port: 5001,
//     headers: {
//       "Access-Control-Allow-Origin": "*"
//     }
//   },
//   build: {
//     target: 'esnext',
//     outDir: 'dist',
//     minify: 'terser',
//     // CSS-specific configurations
//     cssCodeSplit: true,
//     cssMinify: true,
//     assetsInlineLimit: 0,
//     sourcemap: true,
//     rollupOptions: {
//        input: {
//         main: './index.html',
//         styles: './src/App.css'  // Explicit CSS entry
//       },
//       output: {
//         entryFileNames: 'assets/[name].[hash].js',
//         chunkFileNames: 'assets/[name].[hash].js',
//         assetFileNames: 'assets/[name].[hash].[ext]',
//         format: 'esm',
//         globals: {
//           'lodash': '_'
//         }
//       },
//       external: ['lodash']
//     }
//   },
//   optimizeDeps: {
//     include: ['react', 'react-dom', 'lodash'],
//     exclude: ['federation-runtime']
//   },
//   css: {
//     modules: {
//       localsConvention: 'camelCase',
//       generateScopedName: '[name]__[local]___[hash:base64:5]'
//     }
//   }
// });


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['babel-plugin-react-css-modules', {
            generateScopedName: '[name]__[local]___[hash:base64:5]',
            filetypes: { '.css': { syntax: 'postcss' } }
          }]
        ]
      }
    }),
    federation({
      name: 'musicLibrary',
      filename: 'remoteEntry.js',
      exposes: { './MusicLibrary': './src/components/MusicLibrary.jsx' },
      shared: ['react', 'react-dom', 'lodash']
    })
  ],
  base: '/',
  cssPreprocessOptions: {
    postcss: { plugins: [] } // Initialize PostCSS
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    cssCodeSplit: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        styles: path.resolve(__dirname, 'src/App.css') // Explicit CSS entry
      },
      output: {
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});




//above code I need to keep




// // vite.config.js
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import federation from '@originjs/vite-plugin-federation';

// export default defineConfig({
//   plugins: [
//     react(),
//     federation({
//       name: 'musicLibrary',
//       filename: 'remoteEntry.js', // Must match exactly
//       exposes: {
//         './MusicLibrary': './src/components/MusicLibrary.jsx'
//       },
//       shared: ['react', 'react-dom', 'lodash']
//     })
//   ],
//   build: {
//     rollupOptions: {
//       output: {
//         // Critical change: Fixed filename without hash
//         entryFileNames: 'assets/remoteEntry.js',
//         chunkFileNames: 'assets/[name].js',
//         assetFileNames: 'assets/[name].[ext]'
//       }
//     }
//   }
// });








// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import federation from '@originjs/vite-plugin-federation';

// export default defineConfig({
//   plugins: [
//     react(),
//     federation({
//       name: 'musicLibrary',
//       filename: 'remoteEntry.js',
//       exposes: {
//         './MusicLibrary': './src/components/MusicLibrary.jsx'
//       },
//       shared: ['react', 'react-dom', 'lodash']
//     })
//   ],
//   base: '/',
//   build: {
//     target: 'esnext',
//     modulePreload: false,
//     minify: false,
//     cssCodeSplit: false,
//     rollupOptions: {
//       output: {
//         format: 'esm',
//         entryFileNames: 'assets/[name].[hash].js',
//         chunkFileNames: 'assets/[name].[hash].js',
//         assetFileNames: 'assets/[name].[hash].[ext]',
//         globals: {
//           'react': 'React',
//           'react-dom': 'ReactDOM',
//           'lodash': '_'
//         }
//       }
//     }
//   },
//   server: {
//     port: 5001,
//     cors: true,
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
//       "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
//     }
//   },
//   preview: {
//     port: 5001,
//     cors: true,
//     headers: {
//       "Access-Control-Allow-Origin": "*"
//     }
//   }
// });