/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  // The order plays a role because the set of rules will extend or overwrite the previous ones.
  // https://stackoverflow.com/questions/46544082/it-this-the-correct-way-of-extending-eslint-rules#50370083
  extends: [
    "react-app  ",
    "airbnb-base",
    "plugin:unicorn/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["jsconfig.json"],
  },
  parser: "@babel/eslint-parser",
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "src/"],
        paths: ["src"],
      },
    },
  },
  plugins: ["unicorn", "react", "simple-import-sort", "import"],
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/newline-after-import": "error",
    "unicorn/no-static-only-class": "off",
    "import/no-anonymous-default-export": [
      "error",
      {
        // no export default on bad caces
        allowArray: true,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: true, // The true value here is for backward compatibility
        allowLiteral: true,
        allowObject: true,
      },
    ],
    "react/function-component-definition": [
      "error",
      {
        // only arrow-function
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          camelCase: true,
          pascalCase: true,
          kebabCase: true,
        },
      },
    ],
    // only for material-ui, https://mui.com/material-ui/guides/minimizing-bundle-size
    "no-restricted-imports": [
      "error",
      {
        patterns: ["@mui/*/*/*", "@mui/material", "!@mui/material/", "!@mui/material/test-utils/*"],
      },
    ],
    "unicorn/no-object-as-default-parameter": "off",
    "unicorn/consistent-function-scoping": "off",
    "implicit-arrow-linebreak": "off",
    "import/no-unresolved": "off",
    "unicorn/no-null": "off",
    "object-curly-newline": [
      "error",
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 1,
        },
        ObjectPattern: {
          multiline: true,
        },
        ImportDeclaration: {
          multiline: true,
          minProperties: 6,
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 3,
        },
      },
    ],
  },
};
