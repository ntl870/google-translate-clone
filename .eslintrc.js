// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "unused-imports"],
  rules: {
    // vanilla eslint
    "no-console": "warn",
    "no-unused-vars": "warn",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-unreachable": "warn",
    "no-ex-assign": "error",
    "no-alert": "warn",
    "no-else-return": "warn",
    "no-case-declarations": "warn",
    "no-fallthrough": "warn",
    "no-empty-pattern": "warn",
    "no-delete-var": "warn",
    "block-scoped-var": "warn",
    "vars-on-top": "warn",
    yoda: "error",
    "keyword-spacing": "warn",
    "unused-imports/no-unused-imports": "warn",
    quotes: ["warn", "double"],
    "linebreak-style": ["error", "unix"],

    // eslint for react
    "react/boolean-prop-naming": 1,
    "react/no-danger-with-children": 2,
    "react/no-find-dom-node": 2,
    "react/no-unknown-property": 2,
    "react/require-render-return": 1,
    "react/jsx-key": 1,
    "react/jsx-no-target-blank": 1,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/jsx-no-undef": 2,
  },
};
