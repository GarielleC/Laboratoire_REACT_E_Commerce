const jwt = require('jsonwebtoken');

// Middleware d'authentification
function authenticate(req, res, next) {
  // Récupérer le token d'authentification depuis l'en-tête de la requête
  const token = req.header('Authorization');

  // Vérifier si le token est présent
  if (!token) {
    return res.status(401).json({ message: 'Accès non autorisé. Token manquant.' });
  }

  try {
    // Vérifier et décoder le token
    const decoded = jwt.verify(token, 'MotDePasse');

    // Ajouter les informations de l'utilisateur décodées à l'objet de requête
    req.user = decoded;

    // Passer à l'étape suivante du middleware
    next();
  } catch (error) {
    // En cas d'erreur lors de la vérification du token
    return res.status(401).json({ message: 'Accès non autorisé. Token invalide.' });
  }
}

// Utilisation du middleware d'authentification sur une route protégée
// Si le middleware d'authentification a réussi, l'objet de requête (req) contiendra les informations de l'utilisateur
app.get('/route-protegee', authenticate, (req, res) => {
  res.json({ message: 'Accès autorisé.', user: req.user });
});

// Export du middleware d'authentification
module.exports = authenticate
