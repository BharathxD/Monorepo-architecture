module.exports = {
  ...require("eslint-config/next"),
  ignorePatterns: [".eslintrc.js", "next.config.js"],
  parserOptions: {
    root: true,
    project: ["./tsconfig.json"],
  },
};
