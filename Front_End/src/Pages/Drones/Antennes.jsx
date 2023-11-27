import React, { useEffect, useState } from 'react';
import { GetDetails } from '../../components/servcies/api';

const Antennes = ({ nom, stock }) => {
    const [productDetails, setProductDetails] = useState(null);

    const getProduct = async () => {
        const response = await GetDetails();
        setProductDetails(response); 
    };

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <div className="antenne-article">
            {productDetails && (
                <>
                    <h2>{nom}</h2>
                    <p><strong>Fréquence:</strong> {productDetails.othersInformations.frequence}</p>
                    <p><strong>Description:</strong> {productDetails.description}</p>
                    <p><strong>Type d'antenne:</strong> {productDetails.othersInformations.typeAntenne}</p>
                    <p><strong>Compatible avec drones:</strong> {productDetails.othersInformations.compatibleDrones}</p>
                    <p><strong>Catégorie:</strong> {productDetails.categorie}</p>
                    <p><strong>Poids:</strong> {productDetails.othersInformations.poids} g</p>
                    <p><strong>Profondeur:</strong> {productDetails.othersInformations.profondeur} cm</p>
                    <p><strong>Équipement raccords:</strong> {productDetails.othersInformations.equipementRaccords}</p>
                    <p><strong>Stock disponible:</strong> {stock}</p>
                </>
            )}
        </div>
    );
};

export default Antennes;

