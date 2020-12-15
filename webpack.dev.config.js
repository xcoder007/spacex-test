const { default: merge } = require("webpack-merge");

const baseConfig = require("./webpack.base.config");

process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";

module.exports = merge(baseConfig, {
  mode: "development",
  devServer: {
    port: 3000,
  },
  devtool: "source-map",
});
