module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
    'plugin:@typescript-eslint/recommended',
    'next',
    'turbo',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'jsx-a11y', 'prettier', 'turbo'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
  },
  // parserOptions: {
  //   project: ['./tsconfig.json'],
  // },
}
