const path = require('path');
const Sequelize = require('sequelize');
const { db } = require(path.resolve(root + '/src/database.js'));

const BookingStatuses = db.define('booking_statuses', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.DATE,
        allowNull: false,
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

module.exports = BookingStatuses;