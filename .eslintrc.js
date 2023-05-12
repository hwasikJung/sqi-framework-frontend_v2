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
    '@vue/airbnb', // 코딩컨벤션 중 가장 유명한 Airbnb 적용(https://url.kr/hirom5)
  ],
  rules: {
    /**
     * 필요한 룰만 등록 후, 설명 추가 예정
     */
    'no-console': 'off', // console 사용하지 않는 것이 가장 좋은 방법으로 간주됩니다
    'no-alert': 'off', // alert 사용하지 않는 것이 가장 좋은 방법으로 간주됩니다
    'import/no-unresolved': 'off', // ~ 경로 설정시 찾지 못하는 오류
    'linebreak-style': ['error', 'windows'], // eslint 에서 linebreak-style 옵션을 명시하지 않는 경우 개행을 체크할 때 ["error", "unix"] 가 사용됩니다.
    'vue/max-len': 'off', // 라인 최대 길이 오류
    'no-shadow': 'off', // 외부 범위에 선언된 변수를 음영으로 표시하는 변수 선언을 허용하지 않습니다
    'object-curly-newline': 'off', // 특정길이 이상 다음줄로 넘어감
    'no-restricted-globals': 'off', // 특정 전역 변수의 사용을 허용하지 않는다

    // "no-shadow": "off",
    // quotes: ["off", "single"],
    // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    // "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // "import/prefer-default-export": "off",
    // // semi: ["error", "never"],
    // semi: ["error", "always", { omitLastInOneLineBlock: false }],
    // "semi-style": ["error", "last"],
    // "no-mixed-spaces-and-tabs": 0,
    // "no-tabs": 0,
    // "no-new": 0,
    // "operator-linebreak": 0,
    // "prefer-destructuring": 0,
    // "import/extensions": [
    //   "error",
    //   "ignorePackages",
    //   {
    //     js: "never",
    //     jsx: "never",
    //     ts: "never",
    //     tsx: "never"
    //   }
    // ],
    // "import/no-unresolved": 0,
    // "comma-dangle": ["error", "never"],
    // "implicit-arrow-linebreak": 0,
    // curly: 0,
    // "nonblock-statement-body-position": 0,
    // "vue/max-len": ["error", {
    //   code: 180,
    //   template: 180,
    //   tabWidth: 2,
    //   comments: 180,
    //   ignorePattern: "",
    //   ignoreComments: false,
    //   ignoreTrailingComments: false,
    //   ignoreUrls: false,
    //   ignoreStrings: false,
    //   ignoreTemplateLiterals: false,
    //   ignoreRegExpLiterals: false,
    //   ignoreHTMLAttributeValues: false,
    //   ignoreHTMLTextContents: false
    // }],
    // "linebreak-style": "off",
    // "object-curly-newline": 0,
    // camelcase: [
    //   "error",
    //   { properties: "never", ignoreDestructuring: true, ignoreImports: true }
    // ],
    // // "arrow-parens": ["error", "as-needed"],
    // "arrow-parens": 0,
    // "vue/multiline-html-element-content-newline": "off",
    // "eslint-disable-next-line": "off",
    // "import/no-cycle": "off",
    // "no-param-reassign": "off"

  },
};
