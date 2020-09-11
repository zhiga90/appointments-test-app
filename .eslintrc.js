module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    'no-undef': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    quotes: process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    'comma-dangle': process.env.NODE_ENV === 'development' ? ['warn', 'always-multiline'] : ['error', 'always-multiline'],
    semi: process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    'space-before-function-paren': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
  },
}
