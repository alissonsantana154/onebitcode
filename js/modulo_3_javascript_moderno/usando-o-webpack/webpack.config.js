const MiniCssExtractplugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractplugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [new MiniCssExtractplugin()],
};
