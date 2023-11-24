// Importations
const favorisController = require('../Controllers/favoris.controller');
const favorisRouter = require('express').Router();

favorisRouter.route('/add/:id')
    .post(favorisController.addProduct)
    .all((req, res) => {
        res.status(500).send('Non disponible');
    });

favorisRouter.route('/get')
    .get(favorisController.getAllProduct)
    .all((req, res) => {
        res.status(500).send('Non disponible');
    });

favorisRouter.route('/delete/:id')
    .delete(favorisController.deleteProduct)
    .all((req, res) => {
        res.status(500).send('Unavailable');
    });

module.exports = favorisRouter;