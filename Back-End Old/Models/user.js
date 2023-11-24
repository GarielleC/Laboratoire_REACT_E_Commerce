const express = require('express');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');

// Simulation d'une base de données en mémoire
const users = [];

// Création d'un routeur Express
const router = express.Router();

// Route pour la création d'un nouveau compte utilisateur
router.post('/Register', [
  // Utilisation d'express-validator pour valider les données d'entrée
  check('Pseudo').notEmpty(),
  check('Email').isEmail(),
  check('MotDePasse')
    .isLength({ min: 8 }).withMessage('Le mot de passe doit avoir au moins 8 caractères')
    .matches(/[a-z]/).withMessage('Le mot de passe doit contenir au moins une lettre minuscule')
    .matches(/[A-Z]/).withMessage('Le mot de passe doit contenir au moins une lettre majuscule')
    .matches(/[0-9]/).withMessage('Le mot de passe doit contenir au moins un chiffre'),

], (req, res) => {
  // Validation des erreurs
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  };

  // Extraction des données du corps de la requête
  const { Pseudo, Email, MotDePasse } = req.body;

  // Vérification si l'utilisateur existe déjà
  const userExists = users.find(user => user.Email === Email);
  if (userExists) {
    return res.status(400).json({ message: 'Un utilisateur avec cet email existe déjà.' });
  };

  // Création du nouvel utilisateur
  const hashedPassword = bcrypt.hashSync(MotDePasse, 10);
  const newUser = {
    UserID: users.length + 1,
    Pseudo,
    Email,
    MotDePasse: hashedPassword,
    RoleID: 3,
    ResetPasswordToken: null,
    ResetPasswordExpires: null,
  };

  // Ajout du nouvel utilisateur à la liste (simulation de l'ajout à la base de données)
  users.push(newUser);

  // Réponse indiquant que le compte a été créé avec succès
  res.status(201).json({ message: 'Compte créé avec succès.' });
});

// Route pour la connexion d'un utilisateur
router.post('/Login', [

  // Validation des données d'entrée avec express-validator
  check('login').notEmpty(),
  check('MotDePasse').notEmpty(),
], (req, res) => {

  // Validation des erreurs
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  };

  // Extraction des données du corps de la requête
  const { login, MotDePasse } = req.body;

  // Recherche de l'utilisateur par email ou pseudo
  const user = users.find(user => user.Email === login || user.Pseudo === login);

  // Vérification si l'utilisateur existe
  if (!user) {
    return res.status(404).json({ message: 'Utilisateur non trouvé.' });
  };

  // Vérification du mot de passe
  const passwordIsValid = bcrypt.compareSync(MotDePasse, user.MotDePasse);
  if (!passwordIsValid) {
    return res.status(401).json({
      auth: false,
      token: null,
      message: 'Mot de passe invalide.',
    });
  };

  // Génération d'un token (dans une application réelle, vous utiliseriez JWT)
  const token = 'un-token-de-test';

  // Réponse avec le token d'authentification
  res.status(200).json({ auth: true, token });
});

// Export du routeur pour une utilisation dans d'autres parties de l'application
module.exports = router;