const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const CategoriaProduto = require('./categoriaProduto');

const Produto = sequelize.define('produto', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
  },
});

Produto.belongsTo(CategoriaProduto, { foreignKey: 'id_categoria' });

module.exports = Produto;
