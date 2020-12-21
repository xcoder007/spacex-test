const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

const paths = require("./paths");

module.exports = {
  entry: paths.clientEntryFile,
  output: {
    path: paths.buildDir,
    publicPath: "/",
    chunkFilename: "[name]-[hash].js",
    filename: "[name]-[hash].js",
  },
  devServer: {
    contentBase: paths.buildDir,
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
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: paths.indexHtml,
    }),
    new ExtractCssChunks({
      filename: "[name]-[hash].css",
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx"],
      lintDirtyModulesOnly: true,
      failOnError: true,
    }),
  ],
};
