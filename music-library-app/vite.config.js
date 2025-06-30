import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'musicLibrary',
      filename: 'remoteEntry.js', // Critical for Module Federation
      exposes: {
        './MusicLibrary': './src/components/MusicLibrary.jsx'
      },
      shared: ['react', 'react-dom']
    })
  ],
  base: '/', // Required for proper asset paths
  server: {
    port: 5001,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*" // Enable CORS for dev
    }
  },
  preview: {
    port: 5002,
    headers: {
      "Access-Control-Allow-Origin": "*" // Enable CORS for preview
    }
  },
  build: {
    target: 'esnext', // Required for federation
    outDir: 'dist',
    emptyOutDir: true,
    cssCodeSplit: false, // Prevent CSS issues
    rollupOptions: {
      output: {
        // Critical for proper file structure
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
        // Ensure federation files are properly named
        format: 'esm' // ES Modules format
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom'], // Pre-bundle dependencies
    exclude: ['federation-runtime'] // Required for Module Federation
  }
});