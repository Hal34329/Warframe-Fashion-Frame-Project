import baseConfig from "./base.js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import globals from "globals";
import { defineConfig } from "eslint/config";

const reactConfig = defineConfig([
  {
    files: ["**/*.{ts,tsx}"],
      plugins: {
        "react-hooks": reactHooks,
        "react-refresh": reactRefresh,
      },
      extends: [
        baseConfig,
      ],
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
  },
]);

export default reactConfig;