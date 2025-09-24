import typescript from "rollup-plugin-typescript2";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import image from "@rollup/plugin-image";
import copy from "rollup-plugin-copy";

export default [
  {
    input: "src/index.ts",
    plugins: [
      peerDepsExternal(),
      resolve({extensions: [".js", ".jsx", ".ts", ".tsx", ".png", ".jpg"]}),
      commonjs({
        defaultIsModuleExports: true,
        namedExports: {
          react: ["createElement", "Component", "Fragment"],
        },
      }),
      typescript({
        tsconfig: "./tsconfig.json",
        clean: true,
        include: ["src/**/*.{ts,tsx}"],
      }),
      babel({
        exclude: "node_modules/**",
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        presets: [
          "@babel/preset-env",
          ["@babel/preset-react", {runtime: "automatic"}],
          "@babel/preset-typescript",
        ],
        babelHelpers: "bundled",
      }),
      postcss(),
      image({
        output: "dist/assets/images",
      }),
      copy({
        targets: [
          {
            src: "src/assets/images/pngFromSvg/**/*.png",
            dest: "dist/assets/images/pngFromSvg",
          },
          {src: "src/assets/images/*.{png,jpg}", dest: "dist/assets/images"},
        ],
        hook: "buildEnd",
        verbose: true,
      }),
    ],
    output: [
      {
        file: "dist/index.cjs.js",
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
      {file: "dist/index.esm.js", format: "esm", sourcemap: true},
    ],
    external: ["react", "react-dom", "react-native", "react-native-svg"],
  },
  {
    input: "src/native.ts",
    output: [{file: "dist/native.js", format: "cjs"}],
    plugins: [
      peerDepsExternal(),
      resolve({extensions: [".js", ".jsx", ".ts", ".tsx", ".png", ".jpg"]}),
      commonjs({
        defaultIsModuleExports: true,
        namedExports: {
          react: ["createElement", "Component", "Fragment"],
        },
      }),
      typescript({
        tsconfig: "./tsconfig.json",
        clean: true,
        include: ["src/**/*.{ts,tsx}"],
      }),
      babel({
        exclude: "node_modules/**",
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        presets: [
          "@babel/preset-env",
          ["@babel/preset-react", {runtime: "automatic"}],
          "@babel/preset-typescript",
        ],
        babelHelpers: "bundled",
      }),
      postcss(),
      image({
        output: "dist/assets/images",
      }),
      copy({
        targets: [
          {
            src: "src/assets/images/pngFromSvg/**/*.png",
            dest: "dist/assets/images/pngFromSvg",
          },
          {src: "src/assets/images/*.{png,jpg}", dest: "dist/assets/images"},
        ],
        hook: "buildEnd",
        verbose: true,
      }),
    ],
  },
];
