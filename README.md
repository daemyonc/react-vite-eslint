# React / Vite / ESLint / Prettier

### Starter project

> Projects used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

### How To Get Started

Fork the [repo. (https://github.com/daemyonc/react-vite-eslint)](https://github.com/daemyonc/react-vite-eslint)

```bash
npm i
```

```bash
npm start
```

### [ESLint Configuration](./.eslintrc.js)

Feel free to tweak the rules to your liking. [Basic ESLint rules.](https://eslint.org/docs/latest/rules/)

> #### Other rules (Plugins)

- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react#list-of-supported-rules)
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)

```javascript
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
  plugins: ['react', 'react-hooks', 'import'],
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
```

### [Prettier Config](./.prettierrc.js)

```javascript
module.exports = {
  trailingComma: 'es5',
  singleQuote: true,
  arrowParens: 'always',
  endOfLine: 'lf',
};
```
