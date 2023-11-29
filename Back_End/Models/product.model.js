// Importation
const { Sequelize, DataTypes } = require('sequelize');

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

        prix: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        categorie: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },

        frequency:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        
        weight:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        compatibleDrones: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        antennaType:{
            type: DataTypes.STRING,
            allowNull: true,
        },

        depth:{
            type: DataTypes.STRING,
            allowNull: true,
        },

        fittingsEquipment:{
            type: DataTypes.STRING,
            allowNull: true,
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