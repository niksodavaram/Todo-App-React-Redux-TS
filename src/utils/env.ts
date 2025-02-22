export const env = {
  isProduction: import.meta.env.VITE_APP_ENV === 'production',
  isDevelopment: import.meta.env.VITE_APP_ENV === 'development',
  isTest: import.meta.env.VITE_APP_ENV === 'test',

  app: {
    name: import.meta.env.VITE_APP_NAME,
    version: import.meta.env.VITE_APP_VERSION,
    env: import.meta.env.VITE_APP_ENV,
    debug: import.meta.env.VITE_DEBUG === 'true',
  },

  api: {
    url: import.meta.env.VITE_API_URL,
    key: import.meta.env.VITE_API_KEY,
    timeout: Number(import.meta.env.VITE_API_TIMEOUT),
  },

  log: {
    level: import.meta.env.VITE_LOG_LEVEL,
  },
};

// Type-safe environment variable access
export const getEnvVar = (key: keyof ImportMetaEnv): string => {
  const value = import.meta.env[key];
  if (value === undefined) {
    throw new Error(`Environment variable ${key} is not defined`);
  }
  return value;
};
