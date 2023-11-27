//Importation
const { Sequelize, DataTypes } = require('sequelize');
const Product = require('./product.model');
/**
 * Fonction pour créer un model Product (donc table de db)
 * Le JSDoc sert à l'autocomplétion
 * @param {Sequelize} sequelize
 * @returns {import('sequelize').ModelCtor<import('sequelize').Model<any, any>>}
 */


module.exports = (sequelize) => {
    // Définition du modèle (table)
    const Favoris = sequelize.define('Favoris', {
        // L'id se crée automatiquement si non spécifié ici
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },

        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        // Options de création propre à Sequelize (voir doc)
        createdAt: true,  
        tableName: 'Favoris'
    });

    return Favoris;
};