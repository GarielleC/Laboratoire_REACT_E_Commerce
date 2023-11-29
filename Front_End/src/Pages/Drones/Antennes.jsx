// Importation des modules nécessaires de React et react-router-dom
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Importation des services API pour obtenir les détails des drones
import { GetAllDrones, GetDetails } from '../../components/servcies/api';
// Composant pour afficher les informations sur les antennes
import AntennesInfo from '../../components/DronesInfos/AntennesInfo';

// Composant fonctionnel Antennes
const Antennes = ({ stock }) => {
    // État pour stocker la liste des produits (drones)
    const [productList, setProductList] = useState([]);
    // État pour suivre l'état de chargement
    const [isLoading, setIsLoading] = useState(true);


   // Fonction pour récupérer la liste des drones   
   const getDronesList = async () => {
    try {
        // Appelle le service API GetAllDrones pour obtenir la liste des drones
        const response = await GetAllDrones();
        // Enregistre la réponse à des fins de débogage
        console.log(response);

        // Si la réponse n'est pas vide, met à jour la liste des produits et désactive le chargement
        if (response) {
            setProductList(response)
            setIsLoading(false);
    }
    // Enregistre les erreurs qui surviennent lors de l'appel API
   } catch (err) {
    console.error(err);
   }
}

    // Hook useEffect pour récupérer la liste des drones lorsque le composant est monté ou lorsque isLoading change
    useEffect(() => {
        // Vérifie si isLoading est vrai, puis appelle getDronesList
      isLoading ? getDronesList() : null;
     }, [isLoading]);
 
     // Rend le composant
    return (

        <div>
            {productList.map((product) => (
                <Link to={'details/' + product.id}>
                    <h3>{product.name}</h3>
                </Link>
            ))}
        </div>
    );
};

export default Antennes;

// import React, { useEffect, useState } from 'react';
// import { GetDetails } from '../../components/servcies/api';
// import AntennesInfo from '../../components/DronesInfos/AntennesInfo';


// const Antennes = ({ stock }) => {
//     const [productDetails, setProductDetails] = useState([]);
//     const [productIds, setProductIds] = useState([]);
      
//     };
//     const getProduct = async (id) => {
//         if (!productIds.includes(id)) {
//             const response = await GetDetails(id);
//             setProductDetails((prevDetails) => [...prevDetails, response]);
//             setProductIds((prevIds) => [...prevIds, id]);
//         }
//     };


//     useEffect(() => {
//         getProduct(16);
//         getProduct(24);
//         getProduct(25);
//      }, 
//     []);
//     console.log(productDetails)

//     return (
//         <div className="antenne-article">
//             {productDetails.map((details, index) => (
//                 <AntennesInfo key={index} props={details} />
//             ))}
//         </div>
//     );
// };

// export default Antennes;