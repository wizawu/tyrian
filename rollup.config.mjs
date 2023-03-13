export default {
  external: [
    "@babel/preset-env",
    "@rollup/plugin-babel",
    "@rollup/plugin-commonjs",
    "@rollup/plugin-json",
    "@rollup/plugin-node-resolve",
    "@rollup/plugin-typescript",
    "rollup-plugin-less",
    "rollup",
  ],
  output: {
    format: "cjs",
    generatedCode: "es5",
  },
}
