// Import des différentes librairies
require("dotenv").config();
const express = require("express");
require('express-async-errors');
const cors = require('cors');
const router = require('./Routers/router');

// création du serveur WebAPI
const app = express();
//Utilisation du cors
app.use(cors({    origin: '*'}));
app.use(express.json());

// Routing
app.use('/api', router)

// Gestion des erreurs 404
app.use((req, res) => {
    res.status(404).send("Page introuvable");
});

// Gestion des erreurs globales
app.use((error, req, res, next) => {
    console.error("Erreur URL : ", req.url);
    console.error("Erreur : ", error);
    res.status(500).send("Erreur interne du serveur");
});
// Utilisation .env
const { PORT, NODE_ENV } = process.env;

// Initialisation de la db
const db = require('./Models');

// Check la connection avec la db
db.sequelize.authenticate()
    .then(() => console.log('Connection à la DB réussie'))
    .catch((error) => console.log(`Connection à la DB ratée : ${error}`));

// Migration de la db
// if (NODE_ENV === 'development') {
//     db.sequelize.sync({ alter: { drop: false}});
//     console.log('Tous les modeles on été synchronisé')
// };

// Synchronisation des modèles avec la base de données
async function syncDb() {
    try {
        await db.sequelize.sync({ alter: true }); // ou { force: false }
        console.log("Tous les modèles ont été synchronisés avec succès.");
    } catch (error) {
        console.error("Erreur lors de la synchronisation des modèles:", error);
    }
}
// Synchronisation des modèles avec la base de données
syncDb(); 


app.listen(PORT, () => {
    console.log(`Serveur Web démarré sur le port : http://localhost:${PORT}`);
});