module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],

  rules: {

    quotes: ["off", "single"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "import/prefer-default-export": "off",
    // semi: ["error", "never"],
    semi: ["error", "always", { omitLastInOneLineBlock: false }],
    "semi-style": ["error", "last"],
    "no-mixed-spaces-and-tabs": 0,
    "no-tabs": 0,
    "no-new": 0,
    "operator-linebreak": 0,
    "prefer-destructuring": 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/no-unresolved": ["error", { caseSensitive: false }],
    "comma-dangle": 0,
    // "comma-dangle": 0,
    "implicit-arrow-linebreak": 0,
    curly: 0,
    "nonblock-statement-body-position": 0,
    "max-len": "off",
    "linebreak-style": "off",
    "object-curly-newline": 0,
    camelcase: [
      "error",
      { properties: "never", ignoreDestructuring: true, ignoreImports: true },
    ],
    // "arrow-parens": ["error", "as-needed"],
    "arrow-parens": 0,
    "vue/multiline-html-element-content-newline": "off",
    "eslint-disable-next-line": "off",
    "import/no-cycle": "off",
    "no-param-reassign": "off",

  },
};
