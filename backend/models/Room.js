const Sequelize = require("sequelize");
const db = require("../config/config");
const DataTypes = Sequelize.DataTypes;

const Room = db.define("Room", {
    topicID: DataTypes.INTEGER
}, {});
Room.associate = function (models) {
    // associations can be defined here
    Room.hasOne(models.Topic, {
        foreignKey: "topicID",
        targetKey: "id"
    });
};

module.exports = Room;