//Importations
const advicesController = require('../Controllers/advices.controller');
const advicesRouter = require('express').Router(); //Permet de crée une nouvelle instance de routeur Express et la stocke dans la variable authRouter

existingAdvices

advicesRouter.route('/get')
    .get(advicesController.getAllAdvices)
    .all((req, res) => {
        res.statusCode(405).send('Unavailable')
    });

module.exports = advicesRouter;
