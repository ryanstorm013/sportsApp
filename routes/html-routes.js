// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

module.exports = (app) => {
  // index route loads home.html
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
