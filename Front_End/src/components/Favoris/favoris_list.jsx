import React, { useState, useEffect } from 'react';
import { getAllFavoris } from '../servcies/api';


// Composant Product : représente un produit avec ses détails et un bouton pour ajouter/retirer des favoris
const Product = ({ id, name, prix, quantité, onToggleFavoris }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{`Prix: ${prix}€`}</p>
      <p>{`Quantité: ${quantité}`}</p>
      <button onClick={() => onToggleFavoris(id)}>
        {onToggleFavoris && onToggleFavoris.includes(id) ? '❤️' : '🤍'}
      </button>
    </div>
  );
};

// Composant principal pour afficher la liste de produits
const ProductList = () => {
  // State pour stocker la liste des favoris
  const [favoris, setFavoris] = useState([]);

  // State pour gérer les erreurs lors de la récupération des favoris
  const [error, setError] = useState(null);

  // Fonction pour ajouter ou supprimer un produit des favoris
  const toggleFavoris = (productId) => {
    const updatedFavoris = favoris.includes(productId)
      ? favoris.filter((id) => id !== productId)
      : [...favoris, productId];
    setFavoris(updatedFavoris);
  };

  // Effet secondaire pour récupérer la liste des favoris lors du montage du composant
  useEffect(() => {
    const fetchFavoris = async () => {
      try {
        // Appel à la fonction getAllFavoris de l'API
        const res = await getAllFavoris();
        console.log(res);
        // Mise à jour du state avec la liste des favoris récupérée
        setFavoris(res);
      } catch (err) {
        // Gestion des erreurs lors de la récupération des favoris
        console.error('Error fetching favoris details:', err);
        setError(err.response ? err.response.data : 'An unexpected error occurred.');
      }
    };

    // Appel de la fonction pour récupérer les favoris lors du montage du composant
    fetchFavoris();
  }, []);// Le tableau vide indique que cet effet ne dépend d'aucune dépendance, donc il s'exécute une seule fois

  return (
    <div>
      <h1>Favoris List</h1>
      {error ? (<p> Error fetching favoris details : {error}</p>
      ) : (favoris.length > 0 ? (
        favoris.map((favori) => (
          <Product
            key={favori.id}
            id={favori.id}
            name={favori.name}
            prix={favori.name}
            quantité={favori.stock}
            onToggleFavoris={favoris}
          />
        ))) : <p> No favoris </p>)}
      <h2>Favorites</h2>
      {favoris.length > 0 ? (
        <ul>
          {favoris.map((favori) => (
            <li key={favori.id}>{`Product ${favori.id} ❤️`}</li>
          ))}
        </ul>
      ) : (
        <p>You have no favorites</p>
      )}
    </div>
  );
};

export default ProductList;

// import React, { useState, useEffect } from 'react';
// import { getAllFavoris } from '../servcies/api';


// // Composant Product : représente un produit avec ses détails et un bouton pour ajouter/retirer des favoris
// const Product = ({ id, name, prix, quantité, onToggleFavoris }) => {
//   return (
//     <div>
//       <p>{name}</p>
//       <p>{`Prix: ${prix}€`}</p>
//       <p>{`Quantité: ${quantité}`}</p>
//       <button onClick={() => onToggleFavoris(id)}>
//         {onToggleFavoris && onToggleFavoris.includes(id) ? '❤️' : '🤍'}
//       </button>
//     </div>
//   );
// };

// // Composant principal pour afficher la liste de produits
// const ProductList = () => {
//   // State pour stocker la liste des favoris
//   const [favoris, setFavoris] = useState([]);

//   // State pour gérer les erreurs lors de la récupération des favoris
//   const [error, setError] = useState(null);

//   // Fonction pour ajouter ou supprimer un produit des favoris
//   const toggleFavoris = (productId) => {
//     const updatedFavoris = favoris.includes(productId)
//       ? favoris.filter((id) => id !== productId)
//       : [...favoris, productId];
//     setFavoris(updatedFavoris);
//   };

//   // Effet secondaire pour récupérer la liste des favoris lors du montage du composant
//   useEffect(() => {
//     const fetchFavoris = async () => {
//       try {
//         // Appel à la fonction getAllFavoris de l'API
//         const res = await getAllFavoris();
//         console.log(res);
//         // Mise à jour du state avec la liste des favoris récupérée
//         setFavoris(res);
//       } catch (err) {
//         // Gestion des erreurs lors de la récupération des favoris
//         console.error('Error fetching favoris details:', err);
//         setError(err.response ? err.response.data : 'An unexpected error occurred.');
//       }
//     };

//     // Appel de la fonction pour récupérer les favoris lors du montage du composant
//     fetchFavoris();
//   }, []);// Le tableau vide indique que cet effet ne dépend d'aucune dépendance, donc il s'exécute une seule fois

//   return (
//     <div>
//       <h1>Favoris List</h1>
//       {error ? (<p> Error fetching favoris details : {error}</p>
//       ) : (favoris.length > 0 ? (
//         favoris.map((favori) => (
//           <Product
//             key={favori.id}
//             id={favori.id}
//             name={favori.name}
//             prix={favori.name}
//             quantité={favori.stock}
//             onToggleFavoris={favoris}
//           />
//         ))) : <p> No favoris </p>)}
//       <h2>Favorites</h2>
//       {favoris.length > 0 ? (
//         <ul>
//           {favoris.map((favori) => (
//             <li key={favori.id}>{`Product ${favori.id} ❤️`}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>You have no favorites</p>
//       )}
//     </div>
//   );
// };

// export default ProductList;