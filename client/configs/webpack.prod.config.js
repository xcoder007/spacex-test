const { default: merge } = require("webpack-merge");
const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");

const baseConfig = require("./webpack.base.config");

process.env.BABEL_ENV = "production";
process.env.NODE_ENV = "production";

module.exports = merge(baseConfig, {
  mode: "production",
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [new OptimizeCSSPlugin()],
  },
});
