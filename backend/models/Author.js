const Sequelize = require("sequelize");
const db = require("../config/config");

const Author = db.define(
  "Author",
  {
    userName: Sequelize.DataTypes.STRING,
    topicID: Sequelize.DataTypes.INTEGER
  },
  {}
);
Author.associate = function(models) {
  // associations can be defined here
  Author.belongsTo(models.Topic, {
    foreignKey: "topicID",
    targetKey: "id"
  });
};

module.exports = Author;
