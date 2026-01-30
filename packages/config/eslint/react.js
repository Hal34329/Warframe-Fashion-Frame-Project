import { baseConfig } from "./base.js";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";

export const reactConfig = [
    ...baseConfig,
    {
        plugins: {
            react: reactPlugin,
            "react-hooks": hooksPlugin,
        },
        rules: {
            ...reactPlugin.configs.recommended.rules,
            ...hooksPlugin.configs.recommended.rules,
            "react/react-in-jsx-scope": "off",
        },
        settings: {
            react: { version: "detect" },
        },
    }
];