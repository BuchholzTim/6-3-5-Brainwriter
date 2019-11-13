const Sequelize = require('sequelize');
const db = require('../config/config');
const DataTypes = Sequelize.DataTypes;

const Topic = db.define('Topic', {
    moderatorID: DataTypes.INTEGER,
    topic: DataTypes.STRING,
    joinCode: DataTypes.STRING,
    timePerRound: DataTypes.INTEGER
}, {});
Topic.associate = function (models) {
    // associations can be defined here
    Topic.belongsTo(models.Moderator, {
        foreignKey: 'moderatorID',
        targetKey: 'id'
    });
};

module.exports = Topic;