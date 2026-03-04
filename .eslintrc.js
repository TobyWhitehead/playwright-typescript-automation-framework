module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "playwright"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:playwright/recommended",
    "prettier",
  ],
  env: {
    node: true,
    es2021: true,
  },
  rules: {
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/explicit-function-return-type": "warn",
    "playwright/no-focused-test": "error",
  },
};
