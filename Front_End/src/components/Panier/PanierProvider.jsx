// import React from 'react';
// import { usePanier } from '../../components/Panier/panier';

// const Panier = () => {
//   const { ajouterAuPanier, viderPanier, getContenuPanier } = usePanier();

//   const product = {
//     id: 1,
//     name: 'Produit',
//     prix: 20.99,
//   };

//   const handleClickAjouterPanier = () => {
//     ajouterAuPanier(product);
//   };

//   const handleClickViderPanier = () => {
//     viderPanier();
//   };

//   const contenuPanier = getContenuPanier();

//   return (
//     <div>
//       <button onClick={handleClickAjouterPanier}>Ajouter au panier</button>
//       <button onClick={handleClickViderPanier}>Vider le panier</button>

//       <h2>Contenu du panier :</h2>
//       <ul>
//         {contenuPanier.map((item) => (
//           <li key={item.id}>{item.name} - {item.prix}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Panier;



// // index.jsx ou App.jsx
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { PanierProvider } from './chemin/vers/PanierContext';

// ReactDOM.render(
//   <PanierProvider>
//     <App />
//   </PanierProvider>,
//   document.getElementById('root')
// );
