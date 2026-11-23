import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: [
      'dist',
      'dist/**',
      '**/dist/**',
      'build',
      'build/**',
      '**/build/**',
      'out',
      'out/**',
      '**/out/**',
      'node_modules/**',
      '**/node_modules/**',
      '.docusaurus/**',
      '**/.docusaurus/**',
      '.turbo/**',
      '**/.turbo/**',
      '**/*.d.ts',
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/triple-slash-reference': 'off',
      'no-unused-vars': 'off',
      'no-undef': 'off',
      'no-empty': 'off',
    },
  },
];
