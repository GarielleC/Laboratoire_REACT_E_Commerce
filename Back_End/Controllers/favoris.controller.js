const db = require('../Models');
const Product = require('../Models/product.model');
const favorisService = require('../services/favoris.service')

const favorisController = {
    // Renvoie tous les produits (liste complète)
    getAllProduct: (req, res) => {
        res.json(Product);
    },

    addProduct: async (req, res) => {
        try {
            const { name, prix, stock } = req.body;
            console.log(name, prix, stock);
   
            const newProduct = await db.Favoris.create({ 'name': name, 'prix': prix, 'stock': stock });
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    }, 

    // Suppression d'un produit spécifique 
    deleteProduct: (req, res) => {
        const id = Number(req.params.productID);
        
  
        const index = Product.findIndex(Product => Product.id === id);

        if (index === -1) {
            return res.status(404).send('Product not found');
        }
        
        Product.splice(index, 1);
        res.status(200).json('Product deleted');
    },
};

module.exports = favorisController;