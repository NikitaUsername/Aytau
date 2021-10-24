const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_DATA_DB, process.env.USER_DATA_DB, process.env.PASSWORD_DATA_DB, {
    host:       process.env.HOST_DATA_DB,
    dialect:    'mariadb',
    port:       process.env.PORT_DATA_DB,
    // dialectOptions: {
    //     connectionLimit: 5,
    //     // timezone: '+00:00',
    //     timezone: process.env.TIMEZONE,
    // },
    // logging: false
});

module.exports.db = sequelize;
