const Sequelize = require("sequelize");
const db = require("../config/config");
const DataTypes = Sequelize.DataTypes;

const ChatMessage = db.define(
  "ChatMessage",
  {
    authorID: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    column: DataTypes.INTEGER,
    row: DataTypes.INTEGER
  },
  {}
);
ChatMessage.associate = function(models) {
  // associations can be defined here
  ChatMessage.belongsTo(models.Author, {
    foreignKey: "authorID",
    targetKey: "id"
  });
};

module.exports = ChatMessage;
