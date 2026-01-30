import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";
import { defineConfig, globalIgnores } from 'eslint/config'

export default baseConfig = defineConfig([
    globalIgnores(['dist']),
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
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
    }
])
