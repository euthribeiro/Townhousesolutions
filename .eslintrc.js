module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    "prettier",
    "prettier/react"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/prop-types": 0,
    "import/no-extraneous-dependencies": ["error",  {"devDependencies": true}],
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "global-require": "off",
    "no-console": "off",
    "no-underscore-dangle": "off",
    "function-paren-newline": "off",
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "import/no-cycle": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": true
      }
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        "specialLink": [
          "to"
        ]
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 100
      }
    ]
  },
  "globals": {
    "__CLIENT__": true,
    "__SERVER__": true,
    "__DEV__": true
  }
};
