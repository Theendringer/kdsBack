'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('itemCompra', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      qtd: {
        type: Sequelize.REAL,
      },
      valorUni: {
        type: Sequelize.REAL,
      },
      id_compra: {
        type: Sequelize.INTEGER,
        references: {
          model: 'compra',
          key: 'id',
        },
      },
      id_produto: {
        type: Sequelize.INTEGER,
        references: {
          model: 'produto',
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
    return queryInterface.dropTable('itemCompra');
  },
};
