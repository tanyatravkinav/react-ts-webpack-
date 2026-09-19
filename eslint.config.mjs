import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

const browserGlobals = Object.fromEntries(
  Object.entries(globals.browser).map(([key, value]) => [key.trim(), value])
);

export default [
    {
    ignores: [
      "node_modules/",
      "dist/",
      "build/",
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],

    languageOptions: {
      globals: browserGlobals,
    },

    plugins: {
      js,
    },
  },

  js.configs.recommended,

  ...tseslint.configs.recommended,

  pluginReact.configs.flat.recommended,
];