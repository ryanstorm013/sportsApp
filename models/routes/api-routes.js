module.exports = function (app) {
  // code here
  app.get("/", (req, res) => {
    // 1. Add a join to include all of each Author's Posts
    // db.Author.findAll({}).then((dbAuthor) => {
    //   res.json(dbAuthor);
    // });
    console.log("testing");
  });
};
