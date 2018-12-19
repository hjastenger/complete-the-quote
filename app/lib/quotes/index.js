const http = require("http");

const QUOTES_BASE_URL = "http://quotes.stormconsultancy.co.uk/";

function parse_request(buffer) {
  return JSON.parse(buffer.toString("utf-8"));
}

function make_request(options) {
  return new Promise((resolve, reject) => {
    const req = http.get(options, (res) => {
      const bodyChunks = [];
      res.on("data", (chunk) => {
        bodyChunks.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(bodyChunks));
      });
    });

    req.on("error", (e) => {
      reject(e);
    });
  });
}

exports.get_random_quote = function() {
  const resourceURL = new URL(`${QUOTES_BASE_URL}/random.json`)
  return make_request(resourceURL).then(parse_request);
}
