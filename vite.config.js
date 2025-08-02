import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    visualizer({ 
      open: true,
      gzipSize: true,
      brotliSize: true,
      strictPort: true
    })
  ],
  base: '/Aura-consultancy/',
  server: {
    port: 5173,
    open: true,
    host: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          framer: ['framer-motion'],
          icons: ['react-icons'],
          forms: ['react-hook-form', '@emailjs/browser']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      '@emailjs/browser'
    ],
  }
});