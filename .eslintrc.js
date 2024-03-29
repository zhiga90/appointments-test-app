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
    'object-curly-spacing': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    'no-multiple-empty-lines': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    'block-spacing': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    'no-useless-return': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    'space-in-parens': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    'space-before-blocks': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    'no-trailing-spaces': process.env.NODE_ENV === 'development' ? 'warn' : 'error',
  },
}
