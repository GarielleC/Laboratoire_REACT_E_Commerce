const PanierProduct = require('../Models/panierProduit.model');

const panierService = {
    getAllProducts: async () => {
        return await PanierProduct.findAll();
    },

    addProductToCart: async (productDetails) => {
        try {
            const { name, prix, quantite } = productDetails;
            const newProduct = await PanierProduct.create({ name, prix, quantite });
            return newProduct;
        } catch (error) {
            throw new Error(`Unable to add product to cart: ${error.message}`);
        }
    },

    getProductDetails: async (productId) => {
        const product = await PanierProduct.findByPk(productId);
        if (!product) {
            throw new Error('Produit non trouvée');
        }
        return product;
    },

    deleteProductFromCart: async (productId) => {
        const product = await PanierProduct.findByPk(productId);
        if (!product) {
            throw new Error('Produit non trouvée');
        }
        await PanierProduct.destroy({ where: { id: productId } });
        return 'Produit supprimé';
    },
};

module.exports = panierService;
