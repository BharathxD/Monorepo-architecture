module.exports = {
  parserOptions: {
    project: true,
    parser: "@typescript-eslint/parser",
  },
  plugins: ["@typescript-eslint", "tailwindcss"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
  },
  settings: {
    tailwindcss: {
      callees: ["cn", "cva"],
      config: "../tailwind-config/tailwind.config.ts",
      classRegex: "^(class(Name)?|tw)$",
    },
    next: {
      rootDir: ["./"],
    },
  },
};
