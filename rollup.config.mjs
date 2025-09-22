import typescript from "rollup-plugin-typescript2";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import image from "@rollup/plugin-image";
import copy from "rollup-plugin-copy";

export default {
  input: "src/index.ts",
  plugins: [
    peerDepsExternal(),
    resolve({extensions: [".js", ".jsx", ".ts", ".tsx", ".png", ".jpg"]}),
    commonjs(),
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
        "@babel/preset-react",
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
        {src: "src/assets/images/*.{png,jpg}", dest: "dist/assets/images"},
      ],
      verbose: true,
    }),
  ],
  output: [
    {file: "dist/index.js", format: "cjs", sourcemap: true},
    {file: "dist/index.esm.js", format: "esm", sourcemap: true},
  ],
  external: ["react", "react-native", "react-native-svg", "react-dom"],
};
