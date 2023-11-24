// Importations
const panierController = require('../Controllers/panier.controller');
const validateCart = require('../validators/panier.validator');
const panierRouter = require('express').Router();


//Route panier pour mettre un produit dedans
panierRouter.route('/add/:id')
    .post(panierController.addProduct)
    .all((req, res) => {
        res.status(500).send('Non disponible');
    });

panierRouter.route('/get')
    .get(panierController.getProduct)
    .all((req, res) => {
        res.status(500).send('Non disponible');
    });

    //Route panier pour supprimer un produit dedans
panierRouter.route('/delete/:id')
    .delete(panierController.deleteProduct)
    .all((req, res) => {
        res.status(500).send('Unavailable');
    });

//     // Route pour valider le traitement 
// panierRouter.post('/traiter', validateCart, (req, res) => {
//   // Si la validation réussit, on peut accéder aux informations du panier
// //   const completeCart = req.body.completeCart;

//   // Traitez le panier comme nécessaire


//   // Envoie une réponse réussie
//   res.json({ success: true, message: 'Le panier a été traité avec succès.' });
// });




module.exports = panierRouter;