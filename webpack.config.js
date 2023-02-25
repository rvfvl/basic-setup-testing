const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (args) => {
  console.log(args);
  return {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
      static: "./dist",
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Output Management",
        template: "./public/index.html",
      }),
    ],
    entry: "./src/index.tsx",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
  };
};
