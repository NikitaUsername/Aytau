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
    deleted_at: {
        type: Sequelize.DATE,
    },
    created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
    },
},
    {
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = Views;