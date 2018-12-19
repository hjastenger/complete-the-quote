const express = require("express");
const path = require("path");

const { 
  index_router,
  mountNotFoundHandler
} = require("./routers/index");
const { logger } = require("./logger");

class Application {
  constructor() {
    this.app = express();

    this.setConfiguration();
    this.setRoutes();
  }

  setConfiguration() {
    this.app.set("views", path.join(__dirname,"views"));
    this.app.set("view engine", "pug");
    this.app.use(express.static(path.join(__dirname, "public")));
  }

  setRoutes() {
    this.app.use("/", index_router);
  }

  start() {
    mountNotFoundHandler();
    this.server = this.app.listen(3000, () => {
      logger.log("info", "Webserver started on 3000");
    }).on("error", (e) => {
      logger.log("error", `Starting application encountered an error: ${e.message}`);
    });
  }

  stop() {
    this.server.close();
  }
}

exports.Application = Application;
