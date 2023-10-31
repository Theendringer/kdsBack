'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('compra', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nomeCliente: {
        type: Sequelize.STRING,
      },
      dtCompra: {
        type: Sequelize.DATE,
      },
      id_mesa: {
        type: Sequelize.INTEGER,
        references: {
          model: 'mesa',
          key: 'id',
        },
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('compra');
  },
};
