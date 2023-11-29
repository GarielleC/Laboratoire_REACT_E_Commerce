import React from 'react';
import Antennes from '../../Pages/Drones/Antennes';

const AntennesInfo = (props) => {

    const antenne = props.props;
    console.log(antenne);
//   const antenneInfo = {
//     nom: 'Antenne Foxeer LHCP 5.8 GHz',
//     frequence: 'Fréquence : 5.8 GHz',
//     descriptionProduit: 'L\'Antenne Foxeer LHCP 5.8 GHz assure une réception vidéo stable, idéale pour drones FPV.',
//     typeAntenne: 'Omnidirectionnelle pour numérique',
//     compatibleDrones: 'Compatible avec drones Foxeer, DJI, etc. (Pour numérique)',
//     categorie: 'Numérique',
//     poids: 6.8,
//     profondeur: 10.5,
//     equipementRaccords: 'Connecteur SMA',
//     stock: 50,
//   };

  return (
    <div>
      <h1>Informations sur l'Antenne</h1>
      {antenne && (
                <>
                    <p>Nom: {antenne.name}</p>
                    <p><strong>Fréquence:</strong> {antenne.frequency}</p>
                    <p><strong>Description:</strong> {antenne.description}</p>
                    <p><strong>Type d'antenne:</strong> {antenne.antennaType}</p> 
                    <p><strong>Compatible avec drones:</strong> {antenne.compatibleDrones}</p>
                    <p><strong>Catégorie:</strong> {antenne.categorie}</p>
                    <p><strong>Poids:</strong> {antenne.weight} g</p>
                    <p><strong>Profondeur:</strong> {antenne.depth} cm</p>
                    <p><strong>Équipement raccords:</strong> {antenne.fittingsEquipment}</p>
                    <p><strong>Prix:</strong> {antenne.prix}</p>
                    <p><strong>Stock disponible:</strong> {antenne.stock}</p>
                </>
            )}
    </div>
  );
};

export default AntennesInfo;