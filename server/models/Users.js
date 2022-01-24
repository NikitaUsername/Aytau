const path = require('path');
const Sequelize = require('sequelize');
const { db } = require(path.resolve(root + '/src/database.js'));

const Users = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
    },
    surname: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
        allowNull:false
    },
    postId: {
        type: Sequelize.INTEGER,
        allowNull:false
    },
    password: {
        type: Sequelize.STRING,
        allowNull:false
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

module.exports = Users;