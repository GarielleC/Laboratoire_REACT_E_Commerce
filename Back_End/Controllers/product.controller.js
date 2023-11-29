const express = require("express");
// const router = express.Router();

const { Product } = require('../Models');
const { STRING } = require("sequelize");

const productController = {

    getAllProduct: async (req,res) => {
        try {
                    const product = await Product.findAll();
                    res.status(200).json(product);
                } catch (error) {
                    console.error(error);
                    res.status(500).send({ error: error.message });
                }
            },
   
    getProduct: async (req, res) => {
        try {
            const productId = Number(req.params.productID);
            const product = await Product.findByPk(productId);

            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }

            const finalProduct = {
                id: product.id,
                name: product.name,
                description: product.description,
                prix: product.prix,
                stock: product.stock,
                othersInformations: [
                    {categorie: product.categorie},
                    {frequency: product.frequency},
                    {weight: product.weight},
                    {antennaType: product.antennaType},
                    {compatibleDrones: product.compatibleDrones},
                    {depth: product.depth},
                    {fittingsEquipment: product.fittingsEquipment},
                ],
                createdAt: product.createdAt,
                updatedAt: product.updatedAt
            }
            console.log(finalProduct);

            res.json(product);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    createProduct: async (req, res) => {
        try {
            const { name, description, prix, categorie, othersInformations, stock } = req.body;
            console.log(othersInformations.map(infos => infos.frequency).toString());
           
            const newProduct = await Product.create({
                name,
                description,
                prix,
                
                        categorie: othersInformations.map(infos => infos.categorie).toString(),
                        frequency: othersInformations.map(infos => infos.frequency).toString(),
                        weight: othersInformations.map(infos => infos.weight).toString(),
                        antennaType: othersInformations.map(infos => infos.antennaType).toString(),
                        depth: othersInformations.map(infos => infos.depth).toString(),
                        compatibleDrones:othersInformations.map(infos => infos.compatibleDrones).toString(),
                        fittingsEquipment: othersInformations.map(infos => infos.fittingsEquipment).toString(),
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
                
                        categorie: othersInformations.map(infos => infos.categorie).toString(),
                        frequency: othersInformations.map(infos => infos.frequency).toString(),
                        weight: othersInformations.map(infos => infos.weight).toString(),
                        antennaType: othersInformations.map(infos => infos.antennaType).toString(),
                        depth: othersInformations.map(infos => infos.depth).toString(),
                        compatibleDrones:othersInformations.map(infos => infos.compatibleDrones).toString(),
                        fittingsEquipment: othersInformations.map(infos => infos.fittingsEquipment).toString(),
                stock
                },
            );

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