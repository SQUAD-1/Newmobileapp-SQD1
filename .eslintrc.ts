module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:storybook/recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/react",],

  "overrides": [],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": ["./tsconfig.json"],
  },
  "plugins": ["react", "@typescript-eslint"],
  "rules": {
    "prettier/prettier": "error",
    "react/tsx-filename-extension": ["warn", { "extensions": [".ts", ".tsx"] }],
    "import/prefer-default-export": "off"
  }
};
