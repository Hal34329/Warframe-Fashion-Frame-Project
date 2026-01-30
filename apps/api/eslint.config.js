import baseConfig from "@repo/eslint-config/base.js";
import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([{
  plugins: {
    js,
    "@stylistic": stylistic,
    "@typescript-eslint": tseslint.plugin,
  },
  extends: [
    baseConfig,
  ]
}
]);