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
                    <h2>{antenne.name}</h2>
                    {/* <p><strong>Fréquence:</strong> {antenne.frequence}</p> */}
                    <p><strong>Description:</strong> {antenne.description}</p>
                    {/* <p><strong>Type d'antenne:</strong> {antenne.typeAntenne}</p> */}
                    {/* <p><strong>Compatible avec drones:</strong> {antenne.compatibleDrones}</p>
                    <p><strong>Catégorie:</strong> {antenne.categorie}</p>
                    <p><strong>Poids:</strong> {antenne.poids} g</p>
                    <p><strong>Profondeur:</strong> {antenne.profondeur} cm</p>
                    <p><strong>Équipement raccords:</strong> {antenne.equipementRaccords}</p> */}
                    <p><strong>Prix:</strong> {antenne.price}</p>
                    <p><strong>Stock disponible:</strong> {antenne.stock}</p>
                </>
            )}
    </div>
  );
};

export default AntennesInfo;