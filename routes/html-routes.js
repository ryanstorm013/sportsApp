// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

module.exports = (app) => {
  // index route loads home.html
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/all-teams", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/allTeams.html"));
  });

  app.get("/home/edit", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/edit.html"));
  });

  app.post("/home/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.redirect("/home.html")
  })
};
