const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('kds', 'root', 'SECRET', {
  host: 'localhost',
  port: 3360,
  dialect: 'mysql',
});

module.exports = sequelize;
