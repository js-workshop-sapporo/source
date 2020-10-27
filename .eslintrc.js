module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: standard,
  globals: {
    Atomics: readonly,
    : readonly,
    SharedArrayBuffer: readonly,
  },
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: module,
  },
  plugins: [
    vue,
  ],
  rules: {
    semi: [error, always],
    comma-dangle: [2, always-multiline],
    no-var: error,
  },
};

