module.exports = {
  root: true,

  ignorePatterns: [
    'node_modules',
    'coverage',
    'storybook-build',
    'cjs',
    'esm',
    '.github/workflows',
    '.husky',
    'CHANGELOG.md',
  ],

  parserOptions: {
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.md', '.mdx'],
  },

  overrides: [
    {
      files: ['*.js', '*.ts', '*.jsx', '*.tsx'],
      extends: ['@react-hookz/eslint-config/react'],

      rules: {
        'react/button-has-type': 'off',
        'unicorn/prefer-node-protocol': 'off',
        'unicorn/prefer-top-level-await': 'off',

        'import/extensions': [
          'error',
          'ignorePackages',
          {
            ts: 'never',
            tsx: 'never',
          },
        ],
        'import/no-relative-packages': 'error',
        'import/no-useless-path-segments': 'error',

        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'type-imports',
            disallowTypeAnnotations: true,
            fixStyle: 'separate-type-imports',
          },
        ],
      },
    },
    {
      files: [
        '**/__tests__/**/*.js',
        '**/__tests__/**/*.ts',
        '**/__tests__/**/*.jsx',
        '**/__tests__/**/*.tsx',
      ],
      extends: ['@react-hookz/eslint-config/react', '@react-hookz/eslint-config/jest'],

      rules: {
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            ts: 'never',
            tsx: 'never',
          },
        ],
        'import/no-relative-packages': 'error',
        'import/no-useless-path-segments': 'error',

        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'type-imports',
            disallowTypeAnnotations: true,
            fixStyle: 'separate-type-imports',
          },
        ],
      }
    },
    {
      files: ['**/__docs__/**', '**/__tests__/**'],
      rules: {
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        'unicorn/consistent-function-scoping': 'off',
        'unicorn/no-this-assignment': 'off',

        'import/extensions': [
          'error',
          'ignorePackages',
          {
            ts: 'never',
            tsx: 'never',
          },
        ],
        'import/no-relative-packages': 'error',
        'import/no-useless-path-segments': 'error',

        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'type-imports',
            disallowTypeAnnotations: true,
            fixStyle: 'separate-type-imports',
          },
        ],
      },
    },
    {
      files: ['*.md', '*.mdx'],
      extends: ['@react-hookz/eslint-config/mdx'],
    },
  ],
};
