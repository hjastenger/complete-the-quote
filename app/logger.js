const { createLogger, format, transports } = require("winston");
const { combine, timestamp, prettyPrint } = format;

const logger = createLogger({
  level: "info",
  format: combine(
    timestamp(),
    prettyPrint()
  ),
  transports: [
    new transports.File({ filename: "logs/error.log", level: "error" }),
    new transports.File({ filename: "logs/combined.log" }),
    new transports.Console()
  ]
});

exports.logger = logger;
