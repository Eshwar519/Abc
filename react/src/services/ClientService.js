import axios from 'axios';

const BASE_URL = 'http://localhost:8080/Client/';

class ClientService {
    
    changeStatusClient(complaintId){
        return axios.put(BASE_URL+"changeStatusOfComplaint/"+complaintId);
    }

    getClient(clientId){
        return axios.get(BASE_URL+"getClientByClientId/"+clientId);
    }

    getEngineer(engineerId){
        return axios.get(BASE_URL+"getEngineerById/"+engineerId);
    }

    saveClient(client){
        return axios.put(BASE_URL+"saveClient",client);
    }
}

export default new ClientService();