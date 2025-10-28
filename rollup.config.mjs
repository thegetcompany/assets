import typescript from "rollup-plugin-typescript2";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import image from "@rollup/plugin-image";
import copy from "rollup-plugin-copy";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

const babelConfig = {
  exclude: "node_modules/**",
  extensions,
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", {runtime: "automatic"}],
    "@babel/preset-typescript",
  ],
  babelHelpers: "bundled",
};

const tsConfig = {
  tsconfig: "./tsconfig.json",
  clean: true,
  include: ["src/**/*.{ts,tsx}"],
};

const imageConfig = {
  output: "dist/assets/images",
};

export default [
  // ----- Web Build -----
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.cjs.js",
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
      {
        file: "dist/index.esm.js",
        format: "esm",
        sourcemap: true,
        assetFileNames: "assets/images/[name][extname]",
      },
    ],
    external: ["react", "react-dom", "react-native", "react-native-svg"],
    plugins: [
      peerDepsExternal(),
      resolve({extensions}),
      typescript(tsConfig),
      babel(babelConfig),
      postcss(),
      image(imageConfig),
      // copy({
      //   targets: [
      //     {
      //       src: "src/assets/images/*.{png,jpg}",
      //       dest: "dist",
      //     },
      //   ],
      //   hook: "writeBundle",
      //   verbose: true,
      //   flatten: false,
      // }),
    ],
  },

  // ----- Native Build -----
  {
    input: "src/native.ts",
    output: [
      {
        file: "dist/native.js",
        format: "cjs",
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({extensions}),
      typescript(tsConfig),
      babel(babelConfig),
      postcss(),
      image(imageConfig),
      // copy({
      //   targets: [
      //     {
      //       src: "src/assets/images/**/*.{png,jpg,svg}",
      //       dest: "dist",
      //     },
      //   ],
      //   hook: "writeBundle",
      //   verbose: true,
      //   flatten: false,
      // }),
    ],
  },
];
