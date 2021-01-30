const HtmlWebpackPlugin = require("html-webpack-plugin");
const paths = require("../utils/paths");
const pathDir = require("path");
const srcPath = pathDir.join(__dirname, "src");

module.exports = (env) => ({
  devtool: "cheap-eval-source-map",
  output: {
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // template: pathDir.join(__dirname, `index.html`),
      template: "./index.html",
      filename: "index.html",
    }),
    // new HtmlWebpackPlugin({
    //   template: __dirname + "/src/delivery.html",
    //   filename: "delivery.html",
    // }),
  ],
  devServer: {
    contentBase: paths.BUILD_DIR,
    publicPath: "",
    historyApiFallback: true,
    compress: true,
    port: 4040,
    noInfo: true,
    quiet: true,
    clientLogLevel: "warning",
    stats: "errors-only",
    open: true,
  },
});
