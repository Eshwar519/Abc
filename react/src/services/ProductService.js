import axios from 'axios';

const BASE_URL = 'http://localhost:8080/Product/';

class ProductService {
    getProduct(category){
        return axios.get(BASE_URL+"getProduct/"+category);
    }

    addProduct(product){
        return axios.post(BASE_URL+"addProduct/",product);
    }

    updateWarrentyDate(modelNumber){
        return axios.put(BASE_URL+'updateProductWarranty/'+modelNumber)
    }
}

export default new ProductService();