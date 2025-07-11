import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import {PrimeVueResolver} from '@primevue/auto-import-resolver';
import * as app_config from 'config';

// https://vite.dev/config/
export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  const base_path = process.env.VITE_BASE_PATH || './';
  console.log(`* mode: ${mode}`);
  console.log(`* NODE_ENV: ${process.env.NODE_ENV}`);
  console.log(`* BASE_PATH: ${base_path}`);
  console.log(`* VITE_SUPABASE_URL: ${process.env.VITE_SUPABASE_URL}`);
  console.log(`* VITE_SUPABASE_KEY: ${process.env.VITE_SUPABASE_KEY}`);

  return defineConfig({
    base: base_path,

    server: {
      host: '0.0.0.0',
      port: 5173,
    },

    define: {
      app_config: app_config.default,
    },

    plugins: [
      vue(),
      Components({
        resolvers: [
          PrimeVueResolver()
        ]
      }),
    ],

    build: {
      target: ['es2022', 'chrome89', 'firefox89', 'safari15'],
    },
  })
}
