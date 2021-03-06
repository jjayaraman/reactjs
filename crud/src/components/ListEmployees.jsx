import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { EmployeeTableRow } from './EmployeeTableRow';
import { Table, Card, Button } from 'react-bootstrap';

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
        this.loadEmployeesPaging(1, 100);
    }

    loadEmployeesPaging(page, size) {
        this.employeeService.getAllEmployeesPageable(page, size)
            .then(result => {
                console.log('result ', result);
                if (result && result.status === 200 && result.data && result.data.content) {
                    this.setState({ error: false, isLoaded: true, employees: result.data.content });
                }
            })
            .catch(err => {
                this.setState({ error: true, isLoaded: true, employees: [] });
            })
    }

    openAddEmployee = () => {
        this.props.history.push('/employee-create');
    }

    handleDelete = (id) => {
        console.log('delete employee', id);
        this.employeeService.deleteEmployee(id)
            .then(() => {
                console.log('deleted');
                this.loadEmployeesPaging(1, 100);
            })
            .catch(err => {
                console.log(err);
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
                    <Card>
                        <Card.Header>
                            Employee List
                        </Card.Header>
                        <Card.Body>
                            <Button onClick={this.openAddEmployee} >Add Employee</Button>
                            <br /><br />
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>First name</th>
                                        <th>Last name</th>
                                        <th>Birth Date</th>
                                        <th>Hire Date</th>
                                        <th>Gender</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        employees.map(employee => (
                                            <EmployeeTableRow key={employee.id} employee={employee} handleDelete={this.handleDelete}></EmployeeTableRow>
                                        ))
                                    }
                                </tbody>
                            </Table>


                        </Card.Body>
                    </Card>
                </div>
            );
        }

    }
}

export default ListEmployees;