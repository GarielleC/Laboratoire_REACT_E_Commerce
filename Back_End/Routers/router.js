
// Importation du module Router d'Express
const router = require('express').Router();

// Importation des routes spécifiques pour chaque fonctionnalité
const authRouter = require('./auth.router');
const productRouter = require('./product.router');
const panierRouter = require('./panier.router');
const commentRouter = require('./comment.router');
const advicesRouter = require('./advices.router');
const favorisRouter = require('./favoris.router');

//Utilisation des routes spécifiques avec des préfixes pour créer des chemins complets
router.use('/auth', authRouter);
router.use('/product', productRouter);
router.use('/panier', panierRouter);
router.use('/comment', commentRouter);
router.use('/advices', advicesRouter);
router.use('/favoris', favorisRouter);


module.exports = router;
