// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: 5,
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      'function-paren-newline': 'off',
      'no-else-return': 'error',
      'no-return-await': 'error',
      'no-multi-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'lines-between-class-members': 'off',
      'keyword-spacing': ['error', { before: true, after: true }],
      'no-trailing-spaces': 'off',
      'space-before-blocks': 'error',
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/await-thenable': 'error',
      'no-await-in-loop': 'off',
      'prefer-const': [
        'error',
        {
          destructuring: 'all',
        },
      ],
      curly: 'warn',
      'brace-style': 'error',
      quotes: ['error', 'single', { allowTemplateLiterals: true }],
      'unused-imports/no-unused-imports': 'error',
      'unicorn/filename-case': 'error',
      'unicorn/new-for-builtins': 'error',
      'unicorn/no-array-for-each': 'error',
      'unicorn/no-for-loop': 'error',
      'unicorn/no-console-spaces': 'error',
      'unicorn/no-empty-file': 'error',
      'unicorn/no-new-array': 'error',
      'unicorn/no-new-buffer': 'error',
      'unicorn/prefer-number-properties': 'error',
      'unicorn/prefer-spread': 'error',
      'unicorn/prefer-ternary': 'off',
      'unicorn/no-useless-length-check': 'error',
      'unicorn/prefer-switch': 'warn',
      'unicorn/prefer-string-slice': 'warn',
      'unicorn/better-regex': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-array-push-push': 'warn',
      'unicorn/no-null': 'off',
      'unicorn/no-useless-undefined': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/consistent-function-scoping': 'off',
      'unicorn/prefer-module': 'off',
      'unicorn/no-array-method-this-argument': 'off',
      'unicorn/prefer-top-level-await': 'off',
      'unicorn/prefer-node-protocol': 'off',
      'unicorn/import-style': 'off',
      endOfLine: 'off'
    },
  },
);