import { createProxyMiddleware } from 'http-proxy-middleware';

export default function expressMiddleware(router) {
  // Add your proxy configurations here if needed
  // Example:
  // router.use('/api', createProxyMiddleware({
  //   target: 'http://localhost:3000',
  //   changeOrigin: true
  // }));
}