// const express = require("express");
// // const router = express.Router();

// const userController = require("../Controllers/user.controller");


// module.exports = userController; 
const express = require("express");
const router = express.Router();
const { Register } = require("../Controllers/user.controller");
const { Login } = require("../Controllers/user.controller");
const userController = require("../Controllers/user.controller");


// POST : Inscription
router.post('../Front_End/src/components/Register', Register);

// POST : Connexion
router.post('../Front_End/src/components/Login', Login);

// // POST : Demande de réinitialisation de mot de passe
// router.post("/requestReset", userController.requestPasswordReset);

// // POST : Réinitialisation de mot de passe
// router.post("/resetPassword", userController.resetPassword);

module.exports = router;