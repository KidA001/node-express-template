module.exports = {
  env: {
    node: true,
  },
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['dist/', 'node_modules/'],
  rules: {}
};
