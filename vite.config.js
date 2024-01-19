import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';

export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    plugins: [
      laravel({
        input: [
          'resources/css/app.css',
          'resources/js/app.js',
        ],
        refresh: true,
      }),
    ],
    server: {
      host: true,
      hmr: {
        host: process.env.VITE_PUSHER_HOST
      }
    },
  })
};