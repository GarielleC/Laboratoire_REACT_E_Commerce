const db = require('../Models')
const Product = require('../Models/product.model');
const panierService = require('../services/panier.service');

const panierController = {
    // Renvoie tous les produits (liste complète)
    getAllProduct: (req, res) => {
        res.json(product);
    },

    addProduct: async (req, res) => {
        try {
            const { nom, price, stock } = req.body;
            console.log(nom, price, stock);
            const newProduct = await db.Panier.create({ 'name': nom, 'price': price, 'stock': stock });
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    },

    // Renvoie les détails d'un produit spécifique 
    getProduct: (req, res) => {
        const id = Number(req.params.productID);
        const selectedProduct = product.find(product => product.id === id);

        if (!selectedProduct) {
            return res.status(404).send('Product not found');
        }
        res.json(selectedProduct);
    },

    // Suppression d'un produit spécifique 
    deleteProduct: (req, res) => {
        const id = Number(req.params.productID);
        const index = product.findIndex(product => product.id === id);

        if (index === -1) {
            return res.status(404).send('Product not found');
        }

        product.splice(index, 1);
        res.status(200).json('Product deleted');
    },


    
};

module.exports = panierController;