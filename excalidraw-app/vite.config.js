import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  define: {
    'process.env.VITE_APP_GIT_SHA': JSON.stringify(process.env.VERCEL_GIT_COMMIT_SHA),
    'process.env.VITE_APP_ENABLE_TRACKING': JSON.stringify(true)
  }
});