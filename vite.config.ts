import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { checker } from 'vite-plugin-checker';
import readableClassnames from 'vite-plugin-readable-classnames';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    checker({
      typescript: true,
    }),
    react(),
    readableClassnames(),
    tsconfigPaths(),
  ],
  base: '',
  resolve: {
    alias: {
      '$fonts': path.resolve(__dirname, './src/fonts'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // @ts-expect-error api is a valid sass option but not in Vite's types yet
        api: 'modern-compiler',
      },
    },
  },
  server: {
    open: true,
  },
});