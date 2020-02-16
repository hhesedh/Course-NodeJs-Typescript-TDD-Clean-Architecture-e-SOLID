module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    'standard',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    "no-unused-vars": "off",
    //"@typescript-eslint/no-unused-vars": "error"
  }
}
