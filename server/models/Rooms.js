const path = require('path');
const Sequelize = require('sequelize');
const Views = require('./Views');
const { db } = require(path.resolve(root + '/src/database.js'));

const Rooms = db.define('rooms', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
    places_qty: {
        type: Sequelize.INTEGER,
    },
    view_id: {
        type: Sequelize.INTEGER,
    },
    image: {
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
    }
);

Rooms.belongsTo(Views, { foreignKey: 'view_id' });
module.exports = Rooms;