module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "flowtype"
  ],
  "env": {
    "jest": true,
  },
  "extends": "airbnb",
  "rules": {
    "react/require-default-props": 0,
    "global-require": 0,
    "import/prefer-default-export": 0,
    "import/extensions": 0,
    "react/prop-types": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-extra-semi": 2,
    "sort-keys": 2,
    "class-methods-use-this": 0,
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "sort-keys": 0,
    "react/sort-comp": 0,
  }
};
