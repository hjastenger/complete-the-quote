const { app } = require("../index");

before("Starting application", () => {
  app.start();
});

after("Stopping application", () => {
  app.stop();
});
