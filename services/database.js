const Sequelize = require('sequelize');
const config = require('../config');

const {database, user, password, host} = config.mysql;

const sequelize = new Sequelize( database, user, password, {
        host,
        dialect: 'mysql',
        logging: true,
        freezeTableName: true,
        operatorsAliases: false,
        timestamps: false,

    }
);

module.exports = sequelize;











