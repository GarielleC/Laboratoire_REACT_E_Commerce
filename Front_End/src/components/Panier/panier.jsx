// // PanierContext.jsx
// import React, { createContext } from 'react';

// export const PanierContext = createContext({
//   items: [],
//   addItemToCart: () => {} ,
// });

// export const PanierContextProvider = ({ children }) => {

//     //Fonction d'ajout dans le panier
// const handleAddToProductCart = (productID) => {
//     console.log(productID);
// }

//   const initialValue = {
//     items: [],
//         addItemToCart: handleAddToProductCart ,
//   };

//   return (
//     <PanierContext.Provider value={initialValue}>
//       {children}
//     </PanierContext.Provider>
//   );
// };
