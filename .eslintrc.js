module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks', 'react-refresh', 'import'],
  rules: {
    indent: ['error', 2],
    'no-shadow': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'no-unused-vars': 'warn',
    'import/order': 'warn',
    'react/no-unused-prop-types': 'warn',
    'react/no-unknown-property': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': [0],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: true,
      },
    ],
    'react/jsx-props-no-spreading': [0],
    'react/jsx-curly-brace-presence': 'off',
    'arrow-body-style': 'warn',
    'react/jsx-no-bind': 'warn',
    'prefer-arrow-callback': 'warn',
  },
};
