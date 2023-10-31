const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Mesa = sequelize.define('mesa', {
  descricao: {
    type: DataTypes.STRING,
  },
});

module.exports = Mesa;
