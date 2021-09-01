module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'prettier',
    'react',
    'react-hooks',
    'unused-imports',
    'simple-import-sort',
    '@emotion/eslint-plugin',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
    react: {
      version: 'default',
    },
  },
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['warn'],
    'no-console': 'warn',
    'no-nested-ternary': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'jsx-quotes': ['warn', 'prefer-double'],
    'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx'] }],
    'react/prop-types': 'off',
    '@emotion/jsx-import': 'error',
    '@emotion/pkg-renaming': 'error',
    '@typescript-eslint/explicit-function-return-type': [
      'off',
      {
        allowExpressions: true,
      },
    ],
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports-ts': 'error',
    'unused-imports/no-unused-vars-ts': [
      'error',
      { vars: 'all', args: 'none', ignoreRestSiblings: true },
    ],
    '@typescript-eslint/ban-types': 0,
    curly: 'warn',
    'sort-imports': 'off',
    'import/order': 'off',
    'simple-import-sort/exports': 'error',
  },
  ignorePatterns: ['src/generated/'],
}
