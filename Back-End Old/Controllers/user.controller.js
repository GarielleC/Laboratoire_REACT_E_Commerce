const express = require('express');
const User = require('../Models/user');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//TODO: 
// Middleware pour valider les données d'entrée. 

// Validation des données d'entrée avec express-validator
// Middleware pour valider les entrées
// Vérifier si l'utilisateur existe déjà
// Création de l'utilisateur
// Validation des données d'entrée avec express-validator
// Middleware pour valider les entrées
// Trouvez l'utilisateur par email ou pseudo
// Vérifiez le mot de passe
// Si le mot de passe est correct, générez un token
// Répondez avec un token
// Middleware pour extraire l'ID de l'utilisateur
// Middleware pour extraire l'ID de l'utilisateur
// Validation des données d'entrée avec express-validator
// Middleware pour valider les entrées
// Générer un token de réinitialisation de mot de passe ( doit avoir une expiration)
// Enregistrer le token de réinitialisation dans la base de données avec une expiration
// Ici vous devez ajouter un champ à votre modèle User pour stocker le token et sa date d'expiration
// Validation des données d'entrée avec express-validator
// Middleware pour valider les entrées
 // Réinitialiser le mot de passe
// Envoyer une confirmation de réinitialisation de mot de passe
// Réponse en cas de succès
   

exports.login = (req, res, next) => {
    //todo méthode mssql pour faire le middleware
}