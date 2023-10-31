const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Compra = require('./compra');
const Produto = require('./produto');

const ItemCompra = sequelize.define('itemCompra', {
  qtd: {
    type: DataTypes.FLOAT,
  },
  valorUni: {
    type: DataTypes.FLOAT,
  },
});

ItemCompra.belongsTo(Compra, { foreignKey: 'id_compra' });
ItemCompra.belongsTo(Produto, { foreignKey: 'id_produto' });

module.exports = ItemCompra;
