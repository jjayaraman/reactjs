import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { EmployeeTableRow } from './EmployeeTableRow';
import { Table } from 'react-bootstrap';

class ListEmployees extends Component {

    constructor() {
        super();
        this.employeeService = new EmployeeService();
        this.state = {
            error: false,
            isLoaded: false,
            employees: []
        }
    }

    componentDidMount() {
        this.employeeService.getAllEmployeesPageable(1, 100)
            .then(result => {
                console.log('result :', result);

                if (result && result.status === 200 && result.data) {
                    this.setState({ error: false, isLoaded: true, employees: result.data.content });
                }
            })
            .catch(err => {
                this.setState({ error: true, isLoaded: true, employees: [] });
            })
    }

    render() {
        const { error, isLoaded, employees } = this.state;

        if (error) {
            return (
                <div>
                    Error:
                </div>
            );
        } else if (!isLoaded) {
            return (
                <div>
                    Loading...
                </div>
            );
        } else {
            return (
                <div>
                    <Table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Birth Date</th>
                                <th>Hire Date</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employees.map(employee => (
                                    <EmployeeTableRow key={employee.id} employee={employee}></EmployeeTableRow>
                                ))
                            }
                        </tbody>
                    </Table>

                </div>
            );
        }

    }
}

export default ListEmployees;