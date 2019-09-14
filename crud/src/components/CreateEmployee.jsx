import React from 'react';
import { Alert, Form, Col, Row, Button, Card } from 'react-bootstrap';
import EmployeeForm from './EmployeeForm';
import EmployeeService from '../services/EmployeeService';


export default class CreateEmployee extends React.Component {

    constructor() {
        super();
        this.employeeService = new EmployeeService();
        this.state = {
            employee: {
                'firstName': '',
                'lastName': ''
                // 'birthDate': '',
                // 'hireDate': '',
                // 'gender': ''
            }
        }
    }

    save = () => {
        console.log(this.state.values);
        this.employeeService.createEmployee(this.state.values)
            .then(result => {
                this.setState({ error: null });
            })
            .catch(err => {
                console.log(err);
                this.setState({ error: err });
            })
    }

    render() {
        return (
            <div>
                <Form>
                    <Alert variant='primary'>Employee</Alert>

                    <Card style={{ width: '500px' }}>
                        <Card.Header>Create Employee</Card.Header>
                        <Card.Body>

                            <EmployeeForm employee={this.state.employee}></EmployeeForm>
                            <Row>
                                <Col>
                                    <Button variant='primary' type='button' onClick={this.save}>Create</Button>
                                </Col>
                            </Row>

                        </Card.Body>
                    </Card>
                </Form>
            </div>
        );
    }
}
