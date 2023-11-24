const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001; // Choisissez un port de votre choix

app.use(express.json());
app.use(cors()); // Active CORS pour permettre les requêtes depuis le front-end

const commentaires = [];


app.post('/api/commentaires', (req, res) => {
  const { nom, prenom, note, message } = req.body;
  // Faites ce que vous voulez avec les données, par exemple, les enregistrer dans une base de données
  const nouveauCommentaire = { Nom: nom, Prenom: prenom, Note: note, Message: message };
  commentaires.push(nouveauCommentaire);
  console.log('Nouveau commentaire reçu:', nouveauCommentaire);
  res.status(201).json({ message: 'Commentaire reçu avec succès!' });
});

app.listen(port, () => {
  console.log(`Serveur Express écoutant sur le port ${port}`);
});
