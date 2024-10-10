import axios from 'axios';

const API_URL = 'http://localhost:8080'; // Your backend Spring Boot URL

class AuthService {
    login(username, password) {
        return axios.post(`${API_URL}/login`, { username, password });
    }

    register(username, password) {
        return axios.post(`${API_URL}/register`, { username, password });
    }

    logout() {
        // Handle user logout
    }
}

export default new AuthService();