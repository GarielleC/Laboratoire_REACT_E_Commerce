



















// function validateCart(req, res, next) {
    //     const cart = req.body.cart;
    //     const shippingAddress = req.body.shippingAddress;
    //     const billingAddress = req.body.billingAddress;
    //     const paymentMethod = req.body.paymentMethod;
      
        
      
       
    //   // Vérification si le panier est présent dans la requête
    //     if (!cart || !Array.isArray(cart)) {
    //       return res.status(400).json({ error: 'Le panier est invalide.' });
    //     }
      
        
       
    //   // Vérification si les adresses de livraison et de facturation sont présentes
    //     if (!shippingAddress || !billingAddress) {
    //       return res.status(400).json({ error: 'Les adresses de livraison et de facturation sont requises.' });
    //     }
      
    //     // Vérification si le mode de paiement est présent
    //     if (!paymentMethod) {
    //       return res.status(400).json({ error: 'Le mode de paiement est requis.' });
    //     }
     
    //     // Vérification que chaque élément du panier a une structure attendue
        
       
    //   const isValidCart = cart.every(item => {
    //       return item.productId && item.quantity && typeof item.productId === 'string' && typeof item.quantity === 'number';
    //     });
      
    //     if (!isValidCart) {
          
         
    //   return res.status(400).json({ error: 'Le format du panier est invalide.' });
    //     }
      
    //     // Si la validation réussit, ajoutez les informations du panier à l'objet de requête
    //     req.body.completeCart = {
    //       cart,
    //       shippingAddress,
    //       billingAddress,
    //       paymentMethod,
    //     };
    
    //   // Passez à la prochaine étape
    //     next();
    //   }
      
//       module.exports = validateCart;
      