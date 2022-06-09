import express from "express";
import path from "path";
import config from "../../configs/config.project";
import { router } from "./routes"
import prismaClient from "./database/prismaClient.js"

const app = express();
const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, "index.html");

if (process.env.NODE_ENV === "development") {
  const webpack = require("webpack");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const webpack_config = require("../../configs/webpack.config.dev");

  const compiler = webpack(webpack_config);
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpack_config.output.publicPath
    })
  );
  app.use(webpackHotMiddleware(compiler));
  app.get("*", (req, res, next) => {
    compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
      if (err) {
        return next(err);
      }
      res.set("content-type", "text/html");
      res.send(result);
      res.end();
    });
  });
} else if (process.env.NODE_ENV === "production") {
  app.use(express.static(DIST_DIR));

  app.get("*", (req, res) => {
    res.sendFile(HTML_FILE);
  });
}

app.use(router);

app.listen(config.server.port, () => {
  console.log(`🚀 Back-end started on port ${config.server.port}`);
});
