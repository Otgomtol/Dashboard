
// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslint from "@eslint/js";

export default tseslint.config(eslint.configs.recommended, ...tseslint.configs.recommended, {
  files: ['**/*.{ts,tsx}'],
  plugins: {
    react: pluginReact
  },
  languageOptions: {
    parserOptions: {
      ecmaFeatures: { jsx: true },
    },
    globals: {
      ...globals.browser,
    },
  },
  rules: {
      ...pluginReact.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off"
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}, {
  ignores: ["dist/**", "node_modules/**"]
}, storybook.configs["flat/recommended"]);
