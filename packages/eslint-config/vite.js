import { config as baseConfig } from "./base.js";
import tseslint from "typescript-eslint";
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from "globals";

export const viteConfig = tseslint.config(...baseConfig, {
  files: ["**/*.{ts,tsx}"],
  extends: [
    reactHooks.configs.flat.recommended,
    reactRefresh.configs.vite,
  ],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  rules: {
    "react/react-in-jsx-scope": "off",
  },
});
