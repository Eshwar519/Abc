import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

class LoginService{
    loginUser(id, password, choice) {
        return axios.get(API_BASE_URL + '/login/' + id + '/' + password + '/' + choice);
      }
}

export default new LoginService();