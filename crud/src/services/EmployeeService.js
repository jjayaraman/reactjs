import axios from 'axios';

const API_BASE = 'http://localhost:8080/api'

const config = {
    'Content-type': 'application/json'
}

export default class EmployeeService {

    getAllEmployees() {
        const URL = API_BASE + '/employee';
        return axios.get(URL, config);
    }


}