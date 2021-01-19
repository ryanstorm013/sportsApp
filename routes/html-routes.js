// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

module.exports = function (app) {
  // index route loads view.html
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/home.html"));
  });
};
