'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CheckIns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      storeId: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      sliceId: {
        type: Sequelize.INTEGER
      },
      review: {
        type: Sequelize.TEXT
      },
      rating: {
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CheckIns');
  }
};