import React from 'react';
import { useEffect } from 'react';
import { GetDetails } from '../../components/servcies/api';

const Antennes = ({ nom, frequence, descriptionProduit, typeAntenne, compatibleDrones, categorie, poids, profondeur, equipementRaccords, stock }) => {
  const getProduct = async () =>{
    const response = await GetDetails()
    console.log(response)
  }
  useEffect(() => {
    getProduct()
  
  },[]);
  return (
    <div className="antenne-article">
      <h2>{nom}</h2>
      <p><strong>Fréquence:</strong> {frequence}</p>
      <p><strong>Description:</strong> {descriptionProduit}</p>
      <p><strong>Type d'antenne:</strong> {typeAntenne}</p>
      <p><strong>Compatible avec drones:</strong> {compatibleDrones}</p>
      <p><strong>Catégorie:</strong> {categorie}</p>
      <p><strong>Poids:</strong> {poids} g</p>
      <p><strong>Profondeur:</strong> {profondeur} cm</p>
      <p><strong>Équipement raccords:</strong> {equipementRaccords}</p>
      <p><strong>Stock disponible:</strong> {stock}</p>
    </div>
  );
};

export default Antennes;