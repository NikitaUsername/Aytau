const path = require('path');
const Sequelize = require('sequelize');
const { db } = require(path.resolve(root + '/src/database.js'));

const Views = db.define('views', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: Sequelize.STRING,
    },
    deletedAt: {
        type: Sequelize.DATE,
    },
    createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
    },
    updatedAt: {
        type: Sequelize.DATE,
    },
},
    {
        freezeTableName: true
    }
);

module.exports = Views;