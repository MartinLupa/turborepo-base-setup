module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
    'plugin:@typescript-eslint/recommended',
    'next',
    'turbo',
    'next/core-web-vitals',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
}
