import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact, { rules } from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest", 
        sourceType: "module",
        project: "./tsconfig.json", 
        ecmaFeatures: {
          jsx: true, 
        },
      },
    },
    plugins: {
      react: pluginReact,
    },
    rules:{
      rules: {
        "react/react-in-jsx-scope" : "off",
        "react/prop-types": "off"
      },
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
