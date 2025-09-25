import js from "@eslint/js";
import globals from "globals";
import airbnbBase from "eslint-config-airbnb-base";
import prettier from "eslint-config-prettier";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});
export default [
  js.configs.recommended,
  ...compat.extends("airbnb-base"),
  prettier,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "no-console": "off",
      "no-plusplus": "off",
      "prefer-const": "warn",
      "no-var": "error",
    },
  },
];
