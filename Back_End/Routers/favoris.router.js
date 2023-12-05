// Importations
const favorisController = require('../Controllers/favoris.controller');
const favorisRouter = require('express').Router();

favorisRouter.route('/add/:productID')
    .post(favorisController.addProduct)
    .all((req, res) => {
        res.status(405).send('Non disponible');
    });

favorisRouter.route('/getAll')
    .get(favorisController.getAllProduct)
    .all((req, res) => {
        res.status(405).send('Non disponible');
    });

favorisRouter.route('/delete/:productID')
    .delete(favorisController.deleteProduct)
    .all((req, res) => {
        res.status(405).send('Unavailable');
    });

module.exports = favorisRouter;