module.exports = { 
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": 'module'
  },
  "env": {
    "commonjs": true,
    "es6": true,
    "mocha": true,
    "node": true
  },
  "globals": {
    "fetch": false,
  },
  "extends": ["eslint:recommended"],
  "rules": {
    "block-scoped-var": "error",
    "consistent-return": "error",
    "eqeqeq": [
      "error",
      "smart"
    ],
    "guard-for-in": "error",
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "no-console": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "error",
    "no-var": "error",
    "prefer-const": [
      "error",
      {"destructuring": "all"}
    ],
    "quotes": [
      "error",
      "double",
    ],
    "semi": [
      "error",
      "always"
    ]
  }
};
