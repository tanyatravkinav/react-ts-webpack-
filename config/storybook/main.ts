// config/storybook/main.ts
import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
  stories: ["../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  framework: "@storybook/react-webpack5",

  webpackFinal: async (config) => {
    const srcPath = path.resolve(__dirname, "..", "..", "src");

    config.resolve = config.resolve || {};
    config.resolve.modules = [...(config.resolve.modules || []), srcPath];
    config.resolve.extensions = [
      ...(config.resolve.extensions || []),
      ".ts",
      ".tsx",
    ];
    config.resolve.alias = {
      ...config.resolve.alias,
      app: path.resolve(srcPath, "app"),
      shared: path.resolve(srcPath, "shared"),
    };

    // убираем встроенные правила Storybook для scss/css, чтобы не было конфликта
    config.module = config.module || { rules: [] };
    config.module.rules = (config.module.rules || []).filter((rule: any) => {
      const test = rule?.test?.toString?.() || "";
      return !test.includes("scss") && !test.includes("css");
    });

    // добавляем своё правило с enforce: 'pre'
    config.module.rules.push({
      ...buildCssLoader(true),
      enforce: "pre",
      include: [srcPath], // важно: только src
    });

    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test(".svg"),
    );

    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/;
    }

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/, 
      include: [srcPath],
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true, 
          },
        },
      ],
    });

    return config;
  },
};

export default config;
