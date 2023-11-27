import React from 'react';
import AntenneArticle from './Antennes';

const AntennesInfo = () => {
  const antenneInfo = {
    nom: 'Antenne Foxeer LHCP 5.8 GHz',
    frequence: 'Fréquence : 5.8 GHz',
    descriptionProduit: 'L\'Antenne Foxeer LHCP 5.8 GHz assure une réception vidéo stable, idéale pour drones FPV.',
    typeAntenne: 'Omnidirectionnelle pour numérique',
    compatibleDrones: 'Compatible avec drones Foxeer, DJI, etc. (Pour numérique)',
    categorie: 'Numérique',
    poids: 6.8,
    profondeur: 10.5,
    equipementRaccords: 'Connecteur SMA',
    stock: 50,
  };

  return (
    <div>
      <h1>Informations sur l'Antenne</h1>
      <AntenneArticle {...antenneInfo} />
    </div>
  );
};

export default AntennesInfo;