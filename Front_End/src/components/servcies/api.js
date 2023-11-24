import axios from 'axios';

export const GetDetails = async () => {
  try {
    const productDetails = await axios.get(`http://localhost:8080/api/product/get`);
    console.log(productDetails);
    return productDetails.data
  } catch (error) {
    console.error('Error fetching Product data:', error);
    return [];
  }
}
