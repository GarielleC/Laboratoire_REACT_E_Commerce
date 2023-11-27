// Importation
const { Sequelize, DataTypes } = require('sequelize');
const Panier = require('./panier.model');

/**
 * Fonction pour créer un model Product (donc table de db)
 * Le JSDoc sert à l'autocomplétion
 * @param {Sequelize} sequelize
 * @returns {import('sequelize').ModelCtor<import('sequelize').Model<any, any>>}
 */
const createProduct = (sequelize) => {
    // Définition du modèle (table)
    const Product = sequelize.define('Product', {
        // L'id se crée automatiquement si non spécifié ici
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },

        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        categorie: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },

        othersInformations: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        // Options de création propre à Sequelize (voir doc)
        createdAt: true,  
        tableName: 'Product'
    });

    return Product;
};

module.exports = createProduct;
