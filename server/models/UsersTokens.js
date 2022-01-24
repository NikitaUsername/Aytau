const path = require('path');
const Sequelize = require('sequelize');
const { db } = require(path.resolve(root + '/src/database.js'));

const UsersTokens = db.define('users_tokens', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    token: {
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

module.exports = UsersTokens;