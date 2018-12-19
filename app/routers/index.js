const express = require("express");
const { get_random_quote } = require("../lib/quotes");
const helpers = require("../helpers/index");

const { logger } = require("../logger");

const router = express.Router();

router.get("/", (req, res) => {
  get_random_quote()
    .then(quote => {
      const maskedQuote = helpers.replace_random_entries(quote.quote.split(/\s+/)).join(" ");

      res.render("index", {
        title: "Quote Quizer",
        quote: quote,
        maskedQuote: maskedQuote
      });
    })
    .catch((e) => {
      res.status(500).end();
      logger.log("error", e.message);
    });
});

function mountNotFoundHandler() {
  router.all("*", (req, res) => {
    res.status(404).json({
      error: "Not found"
    });
  });
  logger.log("info", "Mounted NotFoundHandler(404)");
}

exports.index_router = router;
exports.mountNotFoundHandler = mountNotFoundHandler;

