const { Sequelize, DataTypes } = require('sequelize');
const Favoris = require('./favoris.model');
const Product = require('./product.model');

const createFavorisProduct = (sequelize) => {
    // Model definition
    const FavorisProduct = sequelize.define('FavorisProduct', {
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        quantite: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        createdAt: true,
        tableName: 'FavorisProduct',
        hooks: {
            // Hook après chaque création d'un enregistrement
            afterCreate: async (createdFavorisProduct, options) => {
                // Mise à jour le produit dans la liste
                await updateProductInList(createdFavorisProduct.FavorisId);
            },
            // Hook après chaque mise à jour d'un enregistrement
            afterUpdate: async (updatedFavorisProduct, options) => {
                // Mise à jour le produit dans la liste
                await updateProductInList(updatedFavorisProduct.FavorisId);
            },
        },
    });

    // Fonction pour mettre à jour le produit dans la liste
    async function updateProductInList(favorisId) {
        // Mise à jour les produits dans la liste ici
        console.log(`Mettre à jour les produits dans la liste pour la liste des favoris ${favorisId}`);
    }

    return FavorisProduct;
};

module.exports = createFavorisProduct;