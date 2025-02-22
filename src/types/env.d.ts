/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_ENV: 'development' | 'production' | 'test';
  readonly VITE_API_URL: string;
  readonly VITE_API_KEY: string;
  readonly VITE_DEBUG: string;
  readonly VITE_LOG_LEVEL: string;
  readonly VITE_APP_VERSION: string;
  readonly VITE_APP_NAME: string;
  readonly VITE_API_TIMEOUT: number;
  // Add other env vars here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
