import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function devApiMiddleware() {
  return {
    name: 'dev-api-middleware',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/apply' && req.method === 'POST') {
          let bodyStr = '';
          req.on('data', (chunk) => { bodyStr += chunk; });
          req.on('end', async () => {
            try {
              const body = JSON.parse(bodyStr || '{}');
              const { processApplication } = await import('./api/apply.js');
              const result = await processApplication(body);
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = result.status || 200;
              res.end(JSON.stringify(result));
            } catch (err) {
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 500;
              res.end(JSON.stringify({ success: false, error: err.message }));
            }
          });
          return;
        }

        if (req.url === '/api/onboarding' && req.method === 'POST') {
          let bodyStr = '';
          req.on('data', (chunk) => { bodyStr += chunk; });
          req.on('end', async () => {
            try {
              const body = JSON.parse(bodyStr || '{}');
              const { processOnboarding } = await import('./api/onboarding.js');
              const result = await processOnboarding(body, req.socket?.remoteAddress || '127.0.0.1');
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = result.status || 200;
              res.end(JSON.stringify(result));
            } catch (err) {
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 500;
              res.end(JSON.stringify({ success: false, error: err.message }));
            }
          });
          return;
        }

        if (req.url === '/api/contact' && req.method === 'POST') {
          let bodyStr = '';
          req.on('data', (chunk) => { bodyStr += chunk; });
          req.on('end', async () => {
            try {
              const body = JSON.parse(bodyStr || '{}');
              const { processContactInquiry } = await import('./api/contact.js');
              const result = await processContactInquiry(body, req.socket?.remoteAddress || '127.0.0.1');
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = result.status || 200;
              res.end(JSON.stringify(result));
            } catch (err) {
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 500;
              res.end(JSON.stringify({ success: false, error: err.message }));
            }
          });
          return;
        }

        next();
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    devApiMiddleware(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three') || id.includes('@react-three')) {
              return 'vendor-three';
            }
            if (id.includes('lenis')) {
              return 'vendor-lenis';
            }
            if (id.includes('framer-motion') || id.includes('node_modules/motion/') || id.includes('node_modules/motion-')) {
              return 'vendor-framer-motion';
            }
            if (id.includes('gsap') || id.includes('@gsap')) {
              return 'vendor-gsap';
            }
            if (id.includes('react-router-dom') || id.includes('react-router') || id.includes('@remix-run')) {
              return 'vendor-router';
            }
            if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/') || id.includes('node_modules/scheduler/')) {
              return 'vendor-react';
            }
          }
        }
      }
    }
  }
})
