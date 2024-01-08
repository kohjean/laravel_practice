import { defineConfig, loadEnv } from 'vite'
import laravel from 'laravel-vite-plugin'
import react from '@vitejs/plugin-react'

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    plugins: [
      react(),
      laravel({
        input: ['resources/css/app.css', 'resources/ts/index.tsx'],
        refresh: true,
      }),
    ],
    server: {
      host: true,
      hmr: {
        host: process.env.VITE_PUSHER_HOST,
      },
    },
  })
}
