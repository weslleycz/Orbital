const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const SERVER_PATH = "./src/server/server.js";

  const TARGET =
    argv.mode === "development" ? "electron-renderer" : "electron-main";

  return {
    entry: {
      server: SERVER_PATH
    },
    output: {
      path: path.join(__dirname, "..", "dist"),
      publicPath: "/",
      filename: "[name].js"
    },
    mode: argv.mode,
    target: TARGET,
    node: {
      __dirname: false,
      __filename: false
    },
    externals: [nodeExternals()],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  };
};
