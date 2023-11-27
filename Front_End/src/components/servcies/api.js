import axios from 'axios';

export const GetDetails = async (id) => {
  try {
    const productDetails = await axios.get(`http://localhost:8080/api/product/get/${id}`);
    console.log(productDetails);
    return productDetails.data
  } catch (error) {
    console.error('Error fetching Product data:', error);
    return [];
  }
}
