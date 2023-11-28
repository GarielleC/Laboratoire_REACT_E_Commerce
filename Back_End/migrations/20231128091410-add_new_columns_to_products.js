'use strict';

const Sequelize = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
    queryInterface.addColumn(
      'Product', // Nom de la table à modifier
      'frequency',
      {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
      },
    ),
    queryInterface.addColumn(
      'Product', // Nom de la table à modifier
      'weight', {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
      
      },
    ),
    queryInterface.addColumn(
      'Product', // Nom de la table à modifier
      'antennaType', {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
      
      },
    ),
    queryInterface.addColumn(
      'Product', // Nom de la table à modifier
      'depth', {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
      
      },
    ),
    queryInterface.addColumn(
      'Product', // Nom de la table à modifier
      'fittingsEquipment', {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
      },
    ),
  ])
}     
};
