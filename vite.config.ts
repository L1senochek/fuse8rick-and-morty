import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import viteStylelint from 'vite-plugin-stylelint';

const viteStylelintOptions = {
  fix: true,
  cache: false,
  lintInWorker: true,
  dev: true,
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), viteStylelint(viteStylelintOptions)],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src/') }],
  },
});
