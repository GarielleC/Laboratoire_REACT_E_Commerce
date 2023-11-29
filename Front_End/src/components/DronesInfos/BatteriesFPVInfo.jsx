import { useState, useEffect} from 'react';
import { GetDetails } from '../servcies/api';
import { useParams } from 'react-router-dom';

const productDetailssInfo = () => {

  // Récupérer l'ID du produit depuis les paramètres de l'URL
  const { id } = useParams();

  // État pour stocker les détails du produit
    const [ productDetails, setProductDetails] = useState({});

    // Fonction asynchrone pour obtenir les détails du produit
    const getProduct = async (id) => {
      // Appeler la fonction GetDetails de l'API
      const response = await GetDetails(id);
       // Afficher la réponse dans la console (à des fins de débogage)
      console.log(response);
      if (response) {
          setProductDetails(response)
      }
  }
 // Afficher les détails du produit dans la console (à des fins de débogage)
  console.log(productDetails && productDetails);

  // Utiliser useEffect pour appeler getProduct lorsque l'ID change
  useEffect(() => {
    id ? getProduct(id) : null;
  }, [])

    // Rendu du composant
  return (
    <div>
      <h1>Informations sur l'productDetails</h1>
      {productDetails && (
                <>
                    <p>Nom: {productDetails.name}</p>
<p><strong>Description:</strong> {productDetails.description}</p>
<p><strong>Type de batterie:</strong> {productDetails.batteryType}</p>
<p><strong>Capacité:</strong> {productDetails.capacity} mAh</p>
<p><strong>Tension:</strong> {productDetails.voltage} V</p>
<p><strong>Nombre de cellules:</strong> {productDetails.cellCount}</p>
<p><strong>Décharge continue maximale:</strong> {productDetails.maxContinuousDischarge} C</p>
<p><strong>Décharge en impulsion maximale:</strong> {productDetails.maxBurstDischarge} C</p>
<p><strong>Connecteur:</strong> {productDetails.connectorType}</p>
<p><strong>Prix:</strong> {productDetails.prix}</p>
<p><strong>Stock disponible:</strong> {productDetails.stock}</p>

                </>
            )}
    </div>
  );
};

export default productDetailssInfo;