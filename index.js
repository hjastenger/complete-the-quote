const { Application } = require("./app/index");

const app = new Application();

if(!module.parent) {
  app.start();
}

exports.app = app;
