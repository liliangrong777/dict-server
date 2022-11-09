// eslint-disable-next-line no-undef
module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'overrides': [
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    '@typescript-eslint'
  ],
  'rules': {
    'array-bracket-spacing':'error',
    'brace-style':'error',
    'space-unary-ops':'error',
    'spaced-comment':'error',
    'space-infix-ops':'error',
    'space-in-parens':'error',
    'space-before-function-paren':'error',
    'space-before-blocks':'error',
    'semi-spacing':'error',
    'indent': ['error', 2],
    'no-multi-spaces': ['error'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-multiple-empty-lines': ['error', {max: 1}],
    'camelcase': ['error', {properties: 'never'}],
    'curly': ['error', 'multi-line'],
    'eqeqeq': 'error',
    'no-else-return': 'error',
    'default-case': 'error',
    'no-fallthrough': 'error',
    'no-unneeded-ternary': 'error',
    'quotes': ['error', 'single'],
    'prefer-template': 'error',
    'no-path-concat': 'error',
    'no-useless-concat': 'error',
    'no-prototype-builtins': 'error',
    'dot-notation': 'error',
    'no-extend-native': 'error',
    'no-new-object': 'error',
    'object-shorthand': ['error', 'always'],
    'no-array-constructor': 'error',
    'new-cap': 'error',
    'no-extra-parens': 'error',
    'no-extra-semi': 'error',
    '@typescript-eslint/consistent-type-imports': 'warn'
  }
};
