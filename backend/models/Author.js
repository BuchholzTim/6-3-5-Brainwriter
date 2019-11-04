const Sequelize = require('sequelize');
const db = require('../config/config');

const Author = db.define("Author", {
    name: Sequelize.DataTypes.STRING
}, {});

module.exports = Author;