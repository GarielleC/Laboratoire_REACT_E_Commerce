const { Sequelize, DataTypes } = require('sequelize');
const Panier = require('./panier.model');
const Product = require('./product.model');

const createPanierProduct = (sequelize) => {
    // Model definition
    const PanierProduct = sequelize.define('PanierProduct', {
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
        },
        priceTotal: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        totalArticles: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
    }, {
        createdAt: true,
        tableName: 'PanierProduct',
        hooks: {
            // Exécute après la création de chaque enregistrement.
            afterCreate: async (createdPanierProduct, options) => {
                // Mise à jour le prix total et le nombre total d'articles
                await updateTotalPriceAndTotalArticles(createdPanierProduct.PanierId);
            },
            // Exécute après chaque mise à jour d'enregistrement
            afterUpdate: async (updatedPanierProduct, options) => {
                // Mise à jour le prix total et le nombre total d'articles
                await updateTotalPriceAndTotalArticles(updatedPanierProduct.PanierId);
            },
        },
    });

    // Fonction pour mettre à jour le prix total et le nombre total d'articles dans le panier
    async function updateTotalPriceAndTotalArticles(panierId) {
        const panierProducts = await PanierProduct.findAll({
            where: { PanierId: panierId },
        });

        const priceTotal = panierProducts.reduce((acc, panierProduct) => {
            return acc + panierProduct.priceTotal;
        }, 0);

        const totalArticles = panierProducts.reduce((acc, panierProduct) => {
            return acc + panierProduct.quantite;
        }, 0);

        await Panier.update({
            priceTotal: priceTotal,
            totalArticles: totalArticles,
        }, {
            where: { id: panierId },
        });
    }

    return PanierProduct;
};

module.exports = createPanierProduct;