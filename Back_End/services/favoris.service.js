/// Importation du modèle FavorisProduct
const FavorisProduct = require('../Models/favorisProduct.model');

// Service lié aux favoris
const favorisService = {
    // Récupérer tous les produits des favoris
    getAllProduct: async () => {
        return await FavorisProduct.findAll();
    },

    // Ajouter un produit aux favoris
    addProductToCart: async (productDetails) => {
        try {
            // Extraire les détails du produit à ajouter
            const { name, prix, quantite } = productDetails;

            // Créer un nouveau produit dans les favoris
            const newProduct = await FavorisProduct.create({ name, prix, quantite });

            return newProduct;
        } catch (error) {
            // Gérer les erreurs lors de l'ajout du produit aux favoris
            throw new Error(`Unable to add product to favorites: ${error.message}`);
        }
    },

    // Obtenir les détails d'un produit des favoris par son ID
    getProductDetails: async (productId) => {
        // Rechercher le produit par son ID
        const product = await FavorisProduct.findByPk(productId);
        
        if (!product) {
            // Gérer le cas où le produit n'est pas trouvé
            throw new Error('Produit non trouvé');
        }

        return product;
    },

    // Supprimer un produit des favoris par son ID
    deleteProductFromCart: async (productId) => {
        // Rechercher le produit par son ID
        const product = await FavorisProduct.findByPk(productId);
        
        if (!product) {
            // Gérer le cas où le produit n'est pas trouvé
            throw new Error('Produit non trouvé');
        }

        // Supprimer le produit des favoris
        await FavorisProduct.destroy({ where: { id: productId } });
        
        return 'Produit supprimé';
    },
};

// Exporter le service des favoris
module.exports = favorisService;