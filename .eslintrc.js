module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ['airbnb-typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // I don't like semis
    '@typescript-eslint/semi': ['error', 'never'],
    'import/no-extraneous-dependencies': ['error', { peerDependencies: true }],
    // I prefer non default exports
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    // sometimes I like to prop spread
    'react/jsx-props-no-spreading': 'off',
    // not needed with typescript
    'react/prop-types': 'off',
  },
}
