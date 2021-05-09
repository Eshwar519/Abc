import axios from 'axios';

const BASE_URL = 'http://localhost:8080/Complaint/';

class ComplaintService {
    bookComplaints(complaint){
        return axios.post(BASE_URL+"bookComplaint/",complaint);
    }

    getAllComplaints(client){
        return axios.post(BASE_URL+"getClientAllComplaints/",client);
    }

    
}

export default new ComplaintService();
