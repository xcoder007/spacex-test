const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: "./dist",
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx"],
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
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("./index.html"),
    }),
  ],
};
