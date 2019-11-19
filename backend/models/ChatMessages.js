const Sequelize = require("sequelize");
const db = require("../config/config");
const DataTypes = Sequelize.DataTypes;

const ChatMessage = db.define("ChatMessage", {
    roomID: DataTypes.INTEGER,
    authorID: DataTypes.STRING,
    content: DataTypes.TEXT,
    column: DataTypes.INTEGER,
    row: DataTypes.INTEGER
}, {});
ChatMessage.associate = function (models) {
    // associations can be defined here
    ChatMessage.belongsTo(models.Room, {
        foreignKey: "roomID",
        targetKey: "id"
    });
    ChatMessage.belongsTo(models.Author, {
        foreignKey: "authorID",
        targetKey: "id"
    })
};

module.exports = ChatMessage;
