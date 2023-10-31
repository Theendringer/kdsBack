const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const CategoriaProduto = sequelize.define('categoriaProduto', {
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = CategoriaProduto;
