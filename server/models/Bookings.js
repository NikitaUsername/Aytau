const path = require('path');
const Sequelize = require('sequelize');
const BookingStatuses = require('./BookingStatuses')
const Rooms = require('./Rooms');;
const { db } = require(path.resolve(root + '/src/database.js'));

const Bookings = db.define('bookings', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    startDate: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    endDate: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    adults: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    children: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    roomId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    surname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    fathersName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        // allowNull: false,666
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    comment: {
        type: Sequelize.STRING,
    },
    totalAmount: Sequelize.FLOAT,
    needTransfer: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    statusId: {
        type: Sequelize.INTEGER,
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
});

Bookings.belongsTo(Rooms, { foreignKey: 'roomId' });
Bookings.belongsTo(BookingStatuses, { foreignKey: 'statusId' });
Rooms.hasMany(Bookings, { foreignKey: 'roomId' });
module.exports = Bookings;