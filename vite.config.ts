import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, './env');

  return {
    envDir: './env',
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.join(__dirname, './src'),
      },
    },
    server: {
      proxy: {
        [env.VITE_BASE_URL]: {
          target: env.VITE_HTTPS_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(env.VITE_BASE_URL, ''),
        },
      },
    },
  };
});
