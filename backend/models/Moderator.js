const Sequelize = require("sequelize");
const db = require("../config/config");
const DataTypes = Sequelize.DataTypes;

const Moderator = db.define("Moderator", {
    username: DataTypes.STRING,
    pwHash: DataTypes.STRING
}, {});
Moderator.associate = function (models) {
    // associations can be defined here
};

module.exports = Moderator;