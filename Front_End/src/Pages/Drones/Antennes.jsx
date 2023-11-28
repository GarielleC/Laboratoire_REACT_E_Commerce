import React, { useEffect, useState } from 'react';
import { GetDetails } from '../../components/servcies/api';
import AntennesInfo from '../../components/DronesInfos/AntennesInfo';


const Antennes = ({ name, stock }) => {
    const [productDetails, setProductDetails] = useState(null);

    const getProduct = async (id) => {
        const response = await GetDetails(id);
        setProductDetails(response); 
    };

    useEffect(() => {
        getProduct(1);
    }, []);

    return (
        <div className="antenne-article">
            {/* {productDetails && (
                <>
                    <h2>{nom}</h2>
                    <p><strong>Fréquence:</strong> {productDetails.frequence}</p>
                    <p><strong>Description:</strong> {productDetails.description}</p>
                    <p><strong>Type d'antenne:</strong> {productDetails.typeAntenne}</p>
                    <p><strong>Compatible avec drones:</strong> {productDetails.compatibleDrones}</p>
                    <p><strong>Catégorie:</strong> {productDetails.categorie}</p>
                    <p><strong>Poids:</strong> {productDetails.poids} g</p>
                    <p><strong>Profondeur:</strong> {productDetails.profondeur} cm</p>
                    <p><strong>Équipement raccords:</strong> {productDetails.equipementRaccords}</p>
                    <p><strong>Prix:</strong> {prix}</p>
                    <p><strong>Stock disponible:</strong> {stock}</p>
                </>
            )} */}

            <AntennesInfo props={productDetails}/>

        </div>
    );
};

export default Antennes;

