// import webpack from "webpack";
// import { BuildPaths } from "../build/types/config";
// import path from "path";
// import { fileURLToPath } from 'node:url';
// import { dirname } from 'node:path';
// import { buildCssLoader } from "../build/loaders/buildCssLoader";

// // Воссоздаем __dirname для ES-модуля
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// export default ({ config }: { config: webpack.Configuration }) => {
//   const paths: BuildPaths = {
//     build: "",
//     html: "",
//     entry: "",
//     src: path.resolve(__dirname, "..", "..", "src"),
//   };
//   config.resolve?.modules?.push(paths.src);

//   config.resolve?.extensions?.push(".ts", ".tsx");

//   config.module?.rules?.push(buildCssLoader(true))

//   return config;
// };
