const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Mesa = require('./mesa');

const Compra = sequelize.define('compra', {
  nomeCliente: {
    type: DataTypes.STRING,
  },
  dtCompra: {
    type: DataTypes.DATE,
  },
});

Compra.belongsTo(Mesa, { foreignKey: 'id_mesa' });

module.exports = Compra;
