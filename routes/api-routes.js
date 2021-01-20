const db = require("../models");

module.exports = function (app) {
  // code here
  app.get("/teams", (req, res) => {
    db.Team.findAll({}).then((dbTeam) => {
      console.log(dbTeam);
      res.json(dbTeam);
    });
  });

  app.post("/teams", (req, res) => {
    db.Team.create({ name: req.body.name, touchdowns: req.body.touchdowns })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => res.json(err));
  });
};
