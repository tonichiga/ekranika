const HtmlWebpackPlugin = require("html-webpack-plugin");
const paths = require("../utils/paths");

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
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      inject: true,
      template: "./index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "delivery.html",
      inject: true,
      template: "./delivery.html",
    }),
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
