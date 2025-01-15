import {
  configDefaults,
  coverageConfigDefaults,
  defineConfig,
} from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    exclude: [...configDefaults.exclude, 'build/**/*'],
    coverage: {
      provider: 'v8',
      exclude: [...coverageConfigDefaults.exclude, 'build/**/*'],
    },
  },
});
