module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define("Team", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    touchdowns: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return Team;
};
