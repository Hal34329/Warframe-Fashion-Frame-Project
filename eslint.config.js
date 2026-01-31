import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";
import { defineConfig, globalIgnores } from 'eslint/config'
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

const baseConfig = defineConfig([
  globalIgnores(['dist']),
  {
    files: ["**/*.{mjs,cjs,ts,mts,cts,tsx}"],
    plugins: {
      js,
      "@stylistic": stylistic,
      "@typescript-eslint": tseslint.plugin,
    },
    languageOptions: {
      globals: globals.node,
      parser: tseslint.parser,
    },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn", {
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_",
          "ignoreRestSiblings": true
        }],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/array-type": ["warn", { "default": "array" }],
      "@typescript-eslint/explicit-function-return-type": "warn",
      "@stylistic/indent": ["error", 4],
      "@stylistic/quotes": ["warn", "double"],
      "@stylistic/semi": ["warn", "always"],
      "@stylistic/object-curly-spacing": ["warn", "always"],
      "@stylistic/comma-spacing": "warn",
      "@stylistic/comma-dangle": ["warn", "always-multiline"],
    },
    extends: [tseslint.configs.recommended],
  },
  {
    files: ['./eslint.config.js', '**/vite.config.ts',],
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      "@stylistic/indent": ["error", 2],
    }
  },
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    languageOptions: {
      globals: globals.browser, // Cambiamos a entorno navegador
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Habilita soporte para JSX
        },
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn", {
          allowConstantExport: true
        },
      ],
      // Aquí puedes añadir reglas de React específicas si quieres
    },
  }
])

export default baseConfig;