import axios from 'axios';

const BASE_URL = 'http://localhost:8080/Admin/';

class AdminService {
    getComplaintsByProduct(product_category){
        return axios.get(BASE_URL+"getComplaintsByProducts/"+product_category);
    }
    
    getAdmin(adminId){
        return axios.get(BASE_URL+"viewAdmin/"+adminId);
    }
    getComplaints(){
        return axios.get(BASE_URL+"getAllComplaints")
    }
    getOpenComplaints(){
        return axios.get(BASE_URL+"getAllOpenComplaints")
    }
    getProducts(){
        return axios.get(BASE_URL+"getAllProducts")
    }
    changeEngineer(complaintId){
        return axios.put(BASE_URL+"replaceEngineerFromComplaint/"+complaintId)
    }
}

export default new AdminService();