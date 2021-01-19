module.exports = function (app) {
  // code here
  app.get("/", (req, res) => {
    console.log("testing");
    db.Add.findAll({}).then((dbAdd) => res.json(dbAdd));
  });
};
