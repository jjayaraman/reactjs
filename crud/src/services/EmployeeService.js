import axios from 'axios';

const API_BASE = 'http://localhost:8080/api'
const EMPLOYEE_API_BASE = API_BASE + '/employee';

const config = {
    'Content-type': 'application/json'
}

export default class EmployeeService {

    // getAllEmployees() {
    //     return axios.get(API_BASE + "/employees", config);
    // }

    getAllEmployeesPageable(page, size) {
        return axios.get(API_BASE + "/employees?page=" + page + "&size=" + size, config);
    }

    getEmployeeById(id) {
        return axios.get(EMPLOYEE_API_BASE + "/" + id, config);
    }

    createEmployee(data) {
        return axios.post(EMPLOYEE_API_BASE, data, config);
    }

    updateEmployee(data) {
        console.log('updating ', data);

        return axios.put(EMPLOYEE_API_BASE, data, config)
    }

}