// src/services/api.ts
import { env } from '../utils/env';

export const apiClient = axios.create({
  baseURL: env.api.url,
  timeout: env.api.timeout,
  headers: {
    'API-Key': env.api.key,
  },
});

// src/components/DebugInfo.tsx
import { env } from '../utils/env';

const DebugInfo = () => {
  if (!env.app.debug) return null;
  
  return (
    <div className="debug-info">
      <p>Environment: {env.app.env}</p>
      <p>Version: {env.app.version}</p>
      <p>API URL: {env.api.url}</p>
    </div>
  );
};