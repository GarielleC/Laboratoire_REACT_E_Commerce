//Importations
const productController = require('../Controllers/product.controller');
const productRouter = require('express').Router(); //Permet de créer une nouvelle instance de routeur Express et la stocke dans la variable productRouter


productRouter.route('/getAll')
    .get(productController.getAllProduct) // Utilisez .get() au lieu de .post() pour la route /get si vous voulez récupérer des produits
    .all((req, res) => {
        res.status(405).send('Unavailable');
    });
 
productRouter.route('/get')
    .get(productController.getProduct) // Utilisez .get() au lieu de .post() pour la route /get si vous voulez récupérer des produits
    .all((req, res) => {
        res.status(405).send('Unavailable');
    });

productRouter.route('/create')
    .post(productController.createProduct)
    .all((req, res) => {
        res.status(405).send('Unavailable');
    });

productRouter.route('/update')
    .post(productController.updateProduct)
    .all((req, res) => {
        res.status(405).send('Unavailable');
    });

productRouter.route('/delete')
    .post(productController.deleteProduct)
    .all((req, res) => {
        res.status(405).send('Unavailable');
    });

module.exports = productRouter;
