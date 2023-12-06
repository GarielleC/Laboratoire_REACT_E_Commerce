import { useState, useEffect} from 'react';
import { GetDetails } from '../servcies/api';
import { useParams } from 'react-router-dom';
import FavorisList from '../Favoris/favoris_list';
import './AntennesInfos.scss'

const productDetailssInfo = () => {

  // Récupérer l'ID du produit depuis les paramètres de l'URL
  const { id } = useParams();

  // État pour stocker les détails du produit
    const [ productDetails, setProductDetails] = useState({});
    const [isFavori, setIsFavori] = useState(false);
    
    

    // Fonction asynchrone pour obtenir les détails du produit
    const getProduct = async (id) => {
      // Appeler la fonction GetDetails de l'API
      const response = await GetDetails(id);
       // Afficher la réponse dans la console (à des fins de débogage)
      console.log(response);
      if (response) {
          setProductDetails(response);
          // Vérifier si le produit est dans les favoris
      setIsFavori(localStorage.getItem(response.id) === 'true');
      }
  }
 // Afficher les détails du produit dans la console (à des fins de débogage)
  console.log(productDetails && productDetails);

  // Utiliser useEffect pour appeler getProduct lorsque l'ID change
  useEffect(() => {
    id ? getProduct(id) : null;
  }, [])

  const addToFavoris = () => {
    // Mettre à jour l'état local des favoris
    setIsFavori(!isFavori);
      // Mettre à jour les favoris dans le stockage local
      localStorage.setItem(productDetails.id, (!isFavori).toString());
    };

    // Rendu du composant
  return (
    <div>
      
      {productDetails && (
        
        <>
        <a href='/drones/antennes'>
          <button className='retour'>Retour</button>
        </a>
        <h3>{productDetails.name}</h3>
                    {/* <p>Nom: {productDetails.name}</p> */}
                    <p><strong>Fréquence:</strong> {productDetails.frequency}</p>
                    <p><strong>Description:</strong> {productDetails.description}</p>
                    <p><strong>Type d'antenne:</strong> {productDetails.antennaType}</p> 
                    <p><strong>Compatible avec drones:</strong> {productDetails.compatibleDrones}</p>
                    <p><strong>Catégorie:</strong> {productDetails.categorie}</p>
                    <p><strong>Poids:</strong> {productDetails.weight} g</p>
                    <p><strong>Profondeur:</strong> {productDetails.depth} cm</p>
                    <p><strong>Équipement raccords:</strong> {productDetails.fittingsEquipment}</p>
                    <p><strong>Prix:</strong> {productDetails.prix} €</p>
                    <p><strong>Stock disponible:</strong> {productDetails.stock}</p>
                    {/* Bouton d'ajout aux favoris */}
                    <div className='favoris'>
                      <button onClick={addToFavoris}>
                        {isFavori ? '❤️' : '🤍'}
                      </button>
                    </div>
                </>
            )}
    </div>
  );
};

export default productDetailssInfo;


// import { useState, useEffect} from 'react';
// import { GetDetails } from '../servcies/api';
// import { useParams } from 'react-router-dom';

// const productDetailssInfo = () => {

//   // Récupérer l'ID du produit depuis les paramètres de l'URL
//   const { id } = useParams();

//   // État pour stocker les détails du produit
//     const [ productDetails, setProductDetails] = useState({});

//     // Fonction asynchrone pour obtenir les détails du produit
//     const getProduct = async (id) => {
//       // Appeler la fonction GetDetails de l'API
//       const response = await GetDetails(id);
//        // Afficher la réponse dans la console (à des fins de débogage)
//       console.log(response);
//       if (response) {
//           setProductDetails(response)
//       }
//   }
//  // Afficher les détails du produit dans la console (à des fins de débogage)
//   console.log(productDetails && productDetails);

//   // Utiliser useEffect pour appeler getProduct lorsque l'ID change
//   useEffect(() => {
//     id ? getProduct(id) : null;
//   }, [])

//     // Rendu du composant
//   return (
//     <div>
      
//       {productDetails && (
        
//         <>
//         <a href='/drones/antennes'>
//           <button>Retour</button>
//         </a>
//         <h3>{productDetails.name}</h3>
//                     {/* <p>Nom: {productDetails.name}</p> */}
//                     <p><strong>Fréquence:</strong> {productDetails.frequency}</p>
//                     <p><strong>Description:</strong> {productDetails.description}</p>
//                     <p><strong>Type d'antenne:</strong> {productDetails.antennaType}</p> 
//                     <p><strong>Compatible avec drones:</strong> {productDetails.compatibleDrones}</p>
//                     <p><strong>Catégorie:</strong> {productDetails.categorie}</p>
//                     <p><strong>Poids:</strong> {productDetails.weight} g</p>
//                     <p><strong>Profondeur:</strong> {productDetails.depth} cm</p>
//                     <p><strong>Équipement raccords:</strong> {productDetails.fittingsEquipment}</p>
//                     <p><strong>Prix:</strong> {productDetails.prix}</p>
//                     <p><strong>Stock disponible:</strong> {productDetails.stock}</p>
//                 </>
//             )}
//     </div>
//   );
// };

// export default productDetailssInfo;