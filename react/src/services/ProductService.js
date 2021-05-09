import axios from 'axios';

const BASE_URL = 'http://localhost:8080/Product/';

class ProductService {
    getProduct(category){
        return axios.get(BASE_URL+"getProduct/"+category);
    }

    addProduct(product){
        return axios.post(BASE_URL+"addProduct/",product);
    }
}

export default new ProductService();