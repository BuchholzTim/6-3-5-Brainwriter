const Sequelize = require("sequelize");
const db = require("../config/config");
const DataTypes = Sequelize.DataTypes;

const Topic = db.define(
  "Topic",
  {
    topic: DataTypes.STRING,
    joinCode: DataTypes.STRING,
    timePerRound: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  },
  {}
);
Topic.associate = function(models) {
  // associations can be defined here
};

module.exports = Topic;
