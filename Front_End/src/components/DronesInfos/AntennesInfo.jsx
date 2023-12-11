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
    const [visibleInfo, setVisibleInfo] = useState({
      description: false,
      frequency: false,
      antennaType: false,
      categorie: false,
      depth: false,
      fittingsEquipment: false,
      weight: false,
    });
    
    

    // Fonction asynchrone pour obtenir les détails du produit
const getProduct = async (id) => {
      // Appeler la fonction GetDetails de l'API
      const response = await GetDetails(id);
       // Afficher la réponse dans la console (à des fins de débogage)
      console.log(response);
      if (response) {
          setProductDetails(response);
          // Vérifier si le produit est dans les favoris
      // setIsFavori(localStorage.getItem(response.id) === 'true');

      }
  }
 // Afficher les détails du produit dans la console (à des fins de débogage)
  console.log(productDetails && productDetails);

  // Utiliser useEffect pour appeler getProduct lorsque l'ID change
  useEffect(() => {
    id ? getProduct(id) : null;
    // localStorage.setItem('items', JSON.stringify(items));
    // if (items) {
    //   setItems(items);
    //  }
}, []);
  

  const addToFavoris = () => {
    // Mettre à jour l'état local des favoris
    setIsFavori(!isFavori);
    // Mettre à jour les favoris dans le stockage local
    localStorage.setItem(productDetails.id, (!isFavori).toString());
    // Pourquoi ne pas utiliser un service qui gère le tableau de favoris du localstorage. Samuel ton petit frère.
    let Favoris = JSON.parse(localStorage.getItem('favoris'));
    Favoris = Favoris ?? [];
    if (Favoris.includes(productDetails.id) && !isFavori) {
      Favoris.push(productDetails.id);
      localStorage.setItem('favoris', JSON.stringify(Favoris));
      console.log('localStorage');
    }
  };
    
    const toggleInfo = (key) => {
      setVisibleInfo((prev) => ({ ...prev, [key]: !prev[key] }));
    };
    // Rendu du composant
  return (
    <div>
      
      {productDetails && (
        
        <>
        <a href='/drones/antennes'>
          <button className='retour'>⬅ Retour</button>
        </a>
       <div  className='article'>
        {/* Bouton d'ajout aux favoris */}
        <div className='favoris'>
              <button onClick={addToFavoris}>
                {isFavori ? '❤️' : '🤍'}
              </button>
            </div>
        <h3>{productDetails.name}</h3>
              {/* <p>Nom: {productDetails.name}</p> */}
              <p>
                <strong>Description:</strong>
                <p>{productDetails.description}</p>
              </p>
              <div className='tableau'>
                <p className='tab'>
                  <span onClick={() => toggleInfo('frequency')}>🎮</span>
                  <strong>Fréquence:</strong>{' '}
                  {visibleInfo.frequency && productDetails.frequency}
                </p>
              
                <p className='tab2'>
                  <span onClick={() => toggleInfo('antennaType')}>🎮</span>
                  <strong>Type d'antenne:</strong>{' '}
                  {visibleInfo.antennaType && productDetails.antennaType}
                </p>

                <p className='tab'>
                  <span onClick={() => toggleInfo('compatibleDrones')}>🎮</span>
                  <strong>Compatible avec drones:</strong>{' '}
                  {visibleInfo.compatibleDrones && productDetails.compatibleDrones}
                </p>

                <p className='tab2'>
                  <span onClick={() => toggleInfo('categorie')}>🎮</span>
                  <strong>Catégorie:</strong>{' '}
                  {visibleInfo.categorie && productDetails.categorie}
                </p>

                <p className='tab'>
                  <span onClick={() => toggleInfo('weight')}>🎮</span>
                  <strong>Poids:</strong> {visibleInfo.weight && productDetails.weight} g
                </p>

                <p className='tab2'>
                  <span onClick={() => toggleInfo('depth')}>🎮</span>
                  <strong>Profondeur:</strong>{' '}
                  {visibleInfo.depth && productDetails.depth} cm
                </p>

                <p className='tab'>
                  <span onClick={() => toggleInfo('fittingsEquipment')}>🎮</span>
                  <strong>Équipement raccords:</strong>{' '}
                  {visibleInfo.fittingsEquipment && productDetails.fittingsEquipment}
                </p>
            </div>
            <p>
              <strong>Prix:</strong>{' '}
              {productDetails.prix} €
            </p>
            <p>
              <strong> Stock disponible:</strong> {productDetails.stock}
            </p>
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
// import FavorisList from '../Favoris/favoris_list';
// import './AntennesInfos.scss'

// const productDetailssInfo = () => {

//   // Récupérer l'ID du produit depuis les paramètres de l'URL
//   const { id } = useParams();

//   // État pour stocker les détails du produit
//     const [ productDetails, setProductDetails] = useState({});
//     const [isFavori, setIsFavori] = useState(false);
//     const [visibleInfo, setVisibleInfo] = useState({
//       description: false,
//       frequency: false,
//       antennaType: false,
//       categorie: false,
//       depth: false,
//       fittingsEquipment: false,
//       weight: false,
//     });
    
    

//     // Fonction asynchrone pour obtenir les détails du produit
// const getProduct = async (id) => {
//       // Appeler la fonction GetDetails de l'API
//       const response = await GetDetails(id);
//        // Afficher la réponse dans la console (à des fins de débogage)
//       console.log(response);
//       if (response) {
//           setProductDetails(response);
//           // Vérifier si le produit est dans les favoris
//       setIsFavori(localStorage.getItem(response.id) === 'true');

//       }
//   }
//  // Afficher les détails du produit dans la console (à des fins de débogage)
//   console.log(productDetails && productDetails);

//   // Utiliser useEffect pour appeler getProduct lorsque l'ID change
//   useEffect(() => {
//     id ? getProduct(id) : null;
//   }, [])

//     const addToFavoris = () => {
//     // Mettre à jour l'état local des favoris
//       setIsFavori(!isFavori);
//       // Mettre à jour les favoris dans le stockage local
//       localStorage.setItem(productDetails.id, (!isFavori).toString());
//       // Pourquoi ne pas utiliser un service qui gère le tableau de favoris du localstorage. Samuel ton petit frère.
//       // let Favoris = JSON.parse(localStorage.getItem('favoris'));
//       // Favoris = Favoris ?? [];
//       // if (Favoris.includes(productDetails.id)&& !isFavori) {
//       // Favoris.push(productDetails.id);
//       // localStorage.setItem('favoris', JSON.stringify(Favoris));
//     };
    
//     const toggleInfo = (key) => {
//       setVisibleInfo((prev) => ({ ...prev, [key]: !prev[key] }));
//     };
//     // Rendu du composant
//   return (
//     <div>
      
//       {productDetails && (
        
//         <>
//         <a href='/drones/antennes'>
//           <button className='retour'>Retour</button>
//         </a>
//        <div  className='article'>
//         {/* Bouton d'ajout aux favoris */}
//         <div className='favoris'>
//               <button className='favoris' onClick={addToFavoris}>
//                 {isFavori ? '❤️' : '🤍'}
//               </button>
//             </div>
//         <h3>{productDetails.name}</h3>
//               {/* <p>Nom: {productDetails.name}</p> */}
//               <p>
//                 <strong>Description:</strong>
//                 <p>{productDetails.description}</p>
//               </p>
//               <div className='tableau'>
//                 <p className='tab'>
//                   <span onClick={() => toggleInfo('frequency')}>🎮</span>
//                   <strong>Fréquence:</strong>{' '}
//                   {visibleInfo.frequency && productDetails.frequency}
//                 </p>
              
//                 <p className='tab2'>
//                   <span onClick={() => toggleInfo('antennaType')}>🎮</span>
//                   <strong>Type d'antenne:</strong>{' '}
//                   {visibleInfo.antennaType && productDetails.antennaType}
//                 </p>

//                 <p className='tab'>
//                   <span onClick={() => toggleInfo('compatibleDrones')}>🎮</span>
//                   <strong>Compatible avec drones:</strong>{' '}
//                   {visibleInfo.compatibleDrones && productDetails.compatibleDrones}
//                 </p>

//                 <p className='tab2'>
//                   <span onClick={() => toggleInfo('categorie')}>🎮</span>
//                   <strong>Catégorie:</strong>{' '}
//                   {visibleInfo.categorie && productDetails.categorie}
//                 </p>

//                 <p className='tab'>
//                   <span onClick={() => toggleInfo('weight')}>🎮</span>
//                   <strong>Poids:</strong> {visibleInfo.weight && productDetails.weight} g
//                 </p>

//                 <p className='tab2'>
//                   <span onClick={() => toggleInfo('depth')}>🎮</span>
//                   <strong>Profondeur:</strong>{' '}
//                   {visibleInfo.depth && productDetails.depth} cm
//                 </p>

//                 <p className='tab'>
//                   <span onClick={() => toggleInfo('fittingsEquipment')}>🎮</span>
//                   <strong>Équipement raccords:</strong>{' '}
//                   {visibleInfo.fittingsEquipment && productDetails.fittingsEquipment}
//                 </p>
//             </div>
//             <p>
//               <strong>Prix:</strong>{' '}
//               {productDetails.prix} €
//             </p>
//             <p>
//               <strong> Stock disponible:</strong> {productDetails.stock}
//             </p>
//             </div>
//           </>
//       )}
//     </div>
//   );
// };

// export default productDetailssInfo;