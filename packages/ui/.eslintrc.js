module.exports = {
  ...require("eslint-config/next"),
  ignorePatterns: [".eslintrc.js"],
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
};
