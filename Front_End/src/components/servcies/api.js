import axios from 'axios';

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
