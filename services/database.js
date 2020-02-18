const sequelize = require('sequelize');
const config = require('../config');

const {database} = config.mysql;


const sequelize = new sequelize( database, {
    dialect: 'mysql',
    timestamps: false,
    operatorsAliases: false,
});

module.exports = sequelize;








