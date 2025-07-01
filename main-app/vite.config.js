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


// 

// import { defineConfig, loadEnv } from 'vite';
// import react from '@vitejs/plugin-react';
// import federation from '@originjs/vite-plugin-federation';

// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), 'VITE_');
  
//   return {
//     plugins: [
//       react(),
//       federation({
//         name: 'main_app',
//         remotes: {
//           musicLibrary: 'https://music-library-separate.netlify.app/assets/remoteEntry.js'
//         },
//         shared: ['react', 'react-dom', 'react-router-dom', 'lodash']
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
//     build: {
//       target: 'esnext',
//       outDir: 'dist',
//       minify: 'terser',
//       // CSS-specific configurations
//       cssCodeSplit: true,
//       cssMinify: true,
//       assetsInlineLimit: 0,
//       rollupOptions: {
//         output: {
//           format: 'esm',
//           assetFileNames: 'assets/[name].[hash].[ext]',
//           chunkFileNames: 'assets/[name].[hash].js',
//           entryFileNames: 'assets/[name].[hash].js',
//           globals: {
//             'lodash': '_'
//           }
//         }
//       }
//     },
//     optimizeDeps: {
//       include: ['react', 'react-dom', 'react-router-dom', 'lodash'],
//       exclude: ['js-big-decimal']
//     }
//   };
// });


// import { defineConfig, loadEnv } from 'vite';
// import react from '@vitejs/plugin-react';
// import federation from '@originjs/vite-plugin-federation';

// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), 'VITE_');

//   return {
//     plugins: [
//       react(),
//       federation({
//         name: 'main_app',
//         remotes: {
//           musicLibrary: `${env.VITE_MUSIC_LIBRARY_URL}/assets/remoteEntry.js`
//         },
//         shared: ['react', 'react-dom', 'react-router-dom', 'lodash']
//       })
//     ],
//     base: '/',
//     server: {
//       port: 5000,
//       strictPort: true
//     },
//     build: {
//       target: 'esnext',
//       modulePreload: false, // Important for MF
//       minify: false, // Easier debugging
//       cssCodeSplit: false, // Better for MF
//       rollupOptions: {
//         output: {
//           format: 'esm',
//           entryFileNames: 'assets/[name].[hash].js',
//           chunkFileNames: 'assets/[name].[hash].js',
//           assetFileNames: 'assets/[name].[hash].[ext]',
//           globals: {
//             'react': 'React',
//             'react-dom': 'ReactDOM',
//             'react-router-dom': 'ReactRouterDOM',
//             'lodash': '_'
//           }
//         }
//       }
//     },
//     optimizeDeps: {
//       include: ['react', 'react-dom', 'react-router-dom', 'lodash']
//     }
//   };
// });











// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import federation from '@originjs/vite-plugin-federation';

// export default defineConfig({
//   plugins: [
//     react(),
//     federation({
//       name: 'main_app',
//       remotes: {
//         musicLibrary: 'https://music-library-separate.netlify.app/assets/remoteEntry.js'
//       },
//       shared: ['react', 'react-dom', 'react-router-dom']
//     })
//   ],
//   build: {
//     target: 'esnext',
//     modulePreload: false
//   }
// });


// import { defineConfig, loadEnv } from 'vite';
// import react from '@vitejs/plugin-react';
// import federation from '@originjs/vite-plugin-federation';
// import path from 'path';

// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), 'VITE_');
  
//   return {
//     plugins: [
//       react({
//         babel: {
//           plugins: [
//             ['babel-plugin-react-css-modules', {
//               generateScopedName: '[name]__[local]___[hash:base64:5]',
//               filetypes: { '.css': { syntax: 'postcss' } } // Explicit CSS handling
//             }]
//           ]
//         }
//       }),
//       federation({
//         name: 'main_app',
//         remotes: {
//           musicLibrary: 'https://music-library-separate.netlify.app/assets/remoteEntry.js'
//         },
//         shared: ['react', 'react-dom', 'react-router-dom', 'lodash']
//       })
//     ],
//     base: '/',
//     // CSS-specific settings (Vite 7.x syntax)
//     cssPreprocessOptions: {
//       scss: { includePaths: [path.resolve(__dirname, 'src')] },
//       postcss: { plugins: [] } // Ensure PostCSS is initialized
//     },
//     build: {
//       target: 'esnext',
//       outDir: 'dist',
//       minify: 'terser',
//       cssCodeSplit: true,
//       assetsInlineLimit: 0, // Force external CSS files
//       rollupOptions: {
//         input: {
//           main: path.resolve(__dirname, 'index.html'),
//           styles: path.resolve(__dirname, 'src/App.css') // Explicit CSS entry
//         },
//         output: {
//           assetFileNames: 'assets/[name].[hash].[ext]',
//           chunkFileNames: 'assets/[name].[hash].js',
//           entryFileNames: 'assets/[name].[hash].js'
//         }
//       }
//     },
//     resolve: {
//       alias: {
//         '@': path.resolve(__dirname, 'src') // For cleaner imports
//       }
//     }
//   };
// });





// import { defineConfig, loadEnv } from 'vite';
// import react from '@vitejs/plugin-react';
// import federation from '@originjs/vite-plugin-federation';

// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), 'VITE_');

//   return {
//     plugins: [
//       react(),
//       federation({
//         name: 'main_app',
//         remotes: {
//           musicLibrary: `${env.VITE_MUSIC_LIBRARY_URL}/assets/remoteEntry.js`
//         },
//         shared: ['react', 'react-dom', 'react-router-dom', 'lodash']
//       })
//     ],
//     base: '/',
//     server: {
//       port: 5000,
//       strictPort: true
//     },
//     build: {
//       target: 'esnext',
//       modulePreload: false, // Important for MF
//       minify: false, // Easier debugging
//       cssCodeSplit: false, // Better for MF
//       rollupOptions: {
//         output: {
//           format: 'esm',
//           entryFileNames: 'assets/[name].[hash].js',
//           chunkFileNames: 'assets/[name].[hash].js',
//           assetFileNames: 'assets/[name].[hash].[ext]',
//           globals: {
//             'react': 'React',
//             'react-dom': 'ReactDOM',
//             'react-router-dom': 'ReactRouterDOM',
//             'lodash': '_'
//           }
//         }
//       }
//     },
//     optimizeDeps: {
//       include: ['react', 'react-dom', 'react-router-dom', 'lodash']
//     }
//   };
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'main_app',
      remotes: {
        musicLibrary: 'https://music-library-separate.netlify.app/assets/remoteEntry.js'
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    target: 'esnext',
    modulePreload: false
  }
});