import axios from 'axios';

// Fonction pour récupérer tous les conseils
export const getAllAdvices = async () => {
  try {
    const getAllAdvices = await axios.get('http://localhost:8080/api/advices/get');
    console.log(getAllAdvices);
    return getAllAdvices.data;
  } catch (error) {
    console.error('Error fetching advice details:', error);
    return [];
  }
}

export const GetDetails = async (productID) => {
  try {
    const productDetails = await axios.get(`http://localhost:8080/api/product/get/${productID}`);
    console.log(productDetails);
    return productDetails.data
  } catch (error) {
    console.error('Error fetching Product data:', error);
    return [];
  }
}

export const GetAllDrones = async () => {
  try {
    const result = await axios.get('http://localhost:8080/api/product/getAll');
    if (result) {
      return result.data;
    } 
  } catch (error) {
    console.error('Error fetching Product data:', error);
  }
}

export const getAllFavoris = async () => {
  try {
    const getAllProduct = await axios.get('http://localhost:8080/api/favoris/getAll');
    console.log(getAllProduct);
    return getAllProduct.data;
  } catch (error) {
    console.error('Error fetching favoris details:', error);
    return [];
  }
}
export const addFavoris = async (productId) => {
  try {
    // Effectuer une requête POST pour ajouter le produit aux favoris
    const response = await axios.post(`http://localhost:8080/api/favoris/add/${productId}`);
    console.log(response);
    return response.data; // Vous pouvez retourner des données supplémentaires en fonction de votre API
  } catch (error) {
    console.error('Error adding to favorites:', error);
  }
};

export const deletedFavoris = async (productId) => {
  try {
    const response = await axios.delete(`http://localhost:8080/api/favoris/delete/${productID}`);
    return response.data; 
  } catch (error) {
    throw error; 
  }
};