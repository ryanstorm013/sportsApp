const db = require("../models");

module.exports = function (app) {
  // code here
  app.get("/api/teams", (req, res) => {
    db.Team.findAll({}).then((dbTeam) => {
      console.log(dbTeam);
      res.json(dbTeam);
    });
  });

  app.post("/api/teams", (req, res) => {
    db.Team.create({ name: req.body.name, touchdowns: req.body.touchdowns })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => res.json(err));
  });

  // RYAN DELETE route for deleting teams.

  // JIVAKA PUT route for updating todos. The updated todo will be available in req.body
  app.put("/api/teams", (req, res) => {
    console.log(req.body);

    db.Team.update(
      {
        touchdowns: req.body.touchdowns,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    )
      .then((data) => {
        res.send(data);
      })
      .catch((err) => res.json(err));
  });

  //   // find a single team by name
  //   app.get("/api/teams/find/:name", (req, res) => {
  //     db.Team.findAll({
  //       where: {
  //         name: req.body.name,
  //         touchdowns: req
  //       }
  //     }).then((dbTeam) => {
  //       console.log(dbTeam);
  //       res.json(dbTeam);
  //     });
  //   });
};
