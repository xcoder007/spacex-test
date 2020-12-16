const path = require("path");
const fs = require("fs");
// const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

const appDirectory = fs.realpathSync(process.cwd());
const resolvePath = (relativePath) => path.resolve(appDirectory, relativePath);

// const WEBPACK_DIR = __dirname;
const SRC_DIR = resolvePath("src");
const INDEX_HTML = resolvePath("index.html");
// const PUBLIC_DIR = resolvePath("public");
const BUILD_DIR = resolvePath("../static");
// const PUBLIC_OUT_DIR = resolvePath("../bundles");

module.exports = {
  entry: path.join(SRC_DIR, "index.js"),
  output: {
    path: BUILD_DIR,
    publicPath: "/",
    chunkFilename: "[name]-[hash].js",
    filename: "[name]-[hash].js",
  },
  devServer: {
    contentBase: BUILD_DIR, // "./build",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              customize: require.resolve(
                "babel-preset-react-app/webpack-overrides"
              ),
              presets: [[require.resolve("babel-preset-react-app")]],
            },
          },
          "eslint-loader",
        ],
      },
      {
        test: /\.css$/i,
        use: [ExtractCssChunks.loader, "css-loader"],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: "url-loader",
        options: {
          limit: 10000,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: INDEX_HTML,
    }),
    new ExtractCssChunks({
      filename: "[name]-[hash].css",
    }),
    // new CopyPlugin({
    //   patterns: [{ from: PUBLIC_DIR, to: PUBLIC_OUT_DIR }],
    // }),
    new ESLintPlugin({
      extensions: ["js", "jsx"],
      lintDirtyModulesOnly: true,
      failOnError: true,
    }),
  ],
};
