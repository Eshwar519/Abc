import axios from 'axios';

const BASE_URL = 'http://localhost:8080/Engineer/';

class EngineerService {
    getComplaintdate(employee,date){
        return axios.post(BASE_URL+"getResolvedComplaintsByDate/"+date,employee);
    }
    getEngineerComplaints(engineer,status){
        return axios.post(BASE_URL+"getAllOpenComplaints/"+status,engineer);
    }
    getResolvedComplaints(engineer){
        return axios.get(BASE_URL+"getResolvedComplaints",engineer);
    }

    getEngineer(engineer){
        return axios.post(BASE_URL+"engineerSignIn",engineer);
    }

}

export default new EngineerService();