const RULES = {
  OFF: "off",
  ERROR: "error",
  WARN: "warn",
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks"],
  rules: {
    "react/react-in-jsx-scope": RULES.OFF,
    "react/jsx-uses-vars": RULES.ERROR,
    "react-hooks/rules-of-hooks": RULES.ERROR,
    "react-hooks/exhaustive-deps": RULES.WARN,
  },
};
