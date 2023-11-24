const express = require("express");
// const router = express.Router();

const { Product } = require('../Models');

const productController = {

    getAllProduct: async (req,res) => {
        try {
                    const product = await Product.findAll();
                    res.status(200).json(product);
                } catch (error) {
                    console.error(error);
                    res.status(500).send(error.message);
                }
            },
    // getProduct: async (req, res) => {
    //     try {
    //         const products = await Product.findAll();
    //         res.json(products);
    //     } catch (error) {
    //         console.error(error);
    //         res.status(500).json({ error: error.message });
    //     }
    // },

    getProduct: async (req, res) => {
        try {
            const productId = Number(req.params.productID);
            const product = await Product.findByPk(productId);

            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }

            res.json(product);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    createProduct: async (req, res) => {
        try {
            const { name, description, prix, categorie, othersInformations, stock } = req.body;
    
            // Vérifiez si toutes les propriétés nécessaires sont présentes
            if (!name || !description || !prix || !categorie || !stock) {
                return res.status(400).json({ message: 'Missing required fields' });
            }
    
            const newProduct = await Product.create({
                name,
                description,
                prix,
                categorie,
                othersInformations,
                stock
            });
    
            res.status(201).json(newProduct);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to create product' });
        }
    },
    
    
    

    updateProduct: async (req, res) => {
        try {
            const productId = Number(req.params.productID);
            const { name, description, prix, categorie, othersInformations, stock } = req.body;

            const product = await Product.findByPk(productId);

            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }

            await product.update({
                name,
                description,
                prix,
                categorie,
                othersInformations,
                stock
            });

            res.status(200).json({ message: 'Product updated' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    },

    deleteProduct: async (req, res) => {
        try {
            const productId = Number(req.params.productID);

            const product = await Product.findByPk(productId);

            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }

            await product.destroy();

            res.status(200).json({ message: 'Product deleted' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = productController;