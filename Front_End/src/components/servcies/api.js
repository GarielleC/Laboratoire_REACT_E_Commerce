import axios from 'axios';

// faire une fonction qui permet de comuniquer avec le back_end pour recuperer les comm

// Fonction pour récupérer tous les conseils
export const getAllAdvices = async () => {
  try {
    const existingAdvices = await axios.get('http://localhost:8080/api/advices/get');
    console.log(existingAdvices);
    return existingAdvices.data;
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