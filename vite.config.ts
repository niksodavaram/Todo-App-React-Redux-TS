// vite.config.ts
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    
    // Env variable validation
    define: {
      __APP_ENV__: JSON.stringify(env.VITE_APP_ENV),
    },
    
    // Environment-specific config
    server: {
      port: mode === 'production' ? 8080 : 3000,
    },
    
    build: {
      sourcemap: mode !== 'production',
      // Other build options...
    },
  };
});