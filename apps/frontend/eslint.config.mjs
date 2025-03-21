import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import nx from '@nx/eslint-plugin';
import { buildConfig } from '../../eslint.config.mjs';


const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
  recommendedConfig: js.configs.recommended,
});

export default buildConfig({
  react: true,
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
}).prepend(
  ...compat.extends('next/typescript'),
  // ...compat.extends('next/core-web-vitals'),
  ...nx.configs['flat/react-typescript'],
  {
    ignores: ['.next/**/*'],
  },
);
