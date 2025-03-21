import { buildConfig } from '../../eslint.config.mjs';

export default buildConfig({
  react: true,
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
});
