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

  // RYAN DELETE route for deleting teams.
  app.delete("/teams/:id", function(req, res) {

    console.log("ive been hit", req.params)
    res.send("success")
    db.Team.destroy({ where: {id: req.params.id} }).then((result) => {
      //console.log(result)
      res.send(result);
    })
    .catch((err) => res.json(err));
  });

  // JIVAKA PUT route for updating todos. The updated todo will be available in req.body

  //
};
