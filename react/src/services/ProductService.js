import axios from 'axios';

const BASE_URL = 'http://localhost:8080/Product/';

class ProductService {
    getProduct(category){
        return axios.get(BASE_URL+"getProduct/"+category);
    }
}

export default new ProductService();