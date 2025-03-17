import { defineConfig as defineViteConfig, mergeConfig } from 'vite';
import { defineConfig as defineVitestConfig } from 'vitest/config';

import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// export default defineConfig({
//   plugins: [react(), tsconfigPaths()],
//   test: {
//     environment: 'jsdom',
//     globals: true,
//     setupFiles: ['./vitest-setup.ts'],
//   },
// });

const viteConfig = defineViteConfig({
  plugins: [react(), tsconfigPaths()],
});

const vitestConfig = defineVitestConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest-setup.ts'],
  },
});

export default mergeConfig(viteConfig, vitestConfig);
