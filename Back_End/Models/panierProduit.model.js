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
        prix: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        quantite: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        prixTotal: {
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
                await updateTotalPrixAndTotalArticles(createdPanierProduct.PanierId);
            },
            // Exécute après chaque mise à jour d'enregistrement
            afterUpdate: async (updatedPanierProduct, options) => {
                // Mise à jour le prix total et le nombre total d'articles
                await updateTotalPrixAndTotalArticles(updatedPanierProduct.PanierId);
            },
        },
    });

    // Fonction pour mettre à jour le prix total et le nombre total d'articles dans le panier
    async function updateTotalPrixAndTotalArticles(panierId) {
        const panierProducts = await PanierProduct.findAll({
            where: { PanierId: panierId },
        });

        const priceTotal = panierProducts.reduce((acc, panierProduct) => {
            return acc + panierProduct.prixTotal;
        }, 0);

        const totalArticles = panierProducts.reduce((acc, panierProduct) => {
            return acc + panierProduct.quantite;
        }, 0);

        await Panier.update({
            prixTotal: prixTotal,
            totalArticles: totalArticles,
        }, {
            where: { id: panierId },
        });
    }

    return PanierProduct;
};

module.exports = createPanierProduct;