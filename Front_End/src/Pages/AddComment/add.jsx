// Importation des modules nécessaires
import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { Link } from 'react-router-dom';
// import './add.scss';




function CommentForm() {
  // Initialisation des états pour stocker les données du formulair
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');

    
  // Fonction handleRating appelée lors de la notation en étoiles
const handleRating = (rate) => {
  // Met à jour l'état 'rating' avec la note attribuée par l'utilisateur
  setRating(rate)
};
console.log(rating);

  // Fonction handleSubmit appelée lors de la soumission du formulaire
  const handleSubmit = (e) => {
    // Empêche le rechargement de la page lors de la soumission du formulaire
    // Affiche les informations dans la console
    e.preventDefault();
    console.log('Nom:', nom);
    console.log('Prénom:', prenom);
    console.log('Email:', email);
    console.log('Message:', message);
  };

  // Rendu du composant CommentForm en html
  return (
    <article className="formulaire">
      <form onSubmit={handleSubmit}>
        
        <Link to="/Comment">
          ⬅ Retour
        </Link>
        <div>
          <label htmlFor="nom">Nom</label>
          <input type="text" name="nom" id="nom" value={nom} onChange={(e) => setNom(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="prenom">Prénom</label>
          <input type="text" name="prenom" id="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
         <div>
        <Rating allowFraction onClick={(rate) => handleRating(rate)} ratingValue={rating} />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message" id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            minLength="10" maxLength="300"
            required
          ></textarea>
        </div>
        <div>
          <button type="submit">Envoyer</button>
        </div>
      </form>
    </article>
  );
};

export default CommentForm;
