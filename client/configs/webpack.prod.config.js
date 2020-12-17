const { default: merge } = require("webpack-merge");
const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");

const baseConfig = require("./webpack.base.config");

process.env.BABEL_ENV = "production";
process.env.NODE_ENV = "production";

module.exports = merge(baseConfig, {
  mode: "production",
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [
      new TerserJSPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: true,
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
      }),
      new OptimizeCSSPlugin(),
    ],
  },
});
