import React from 'react';
import { Alert, Form, Col, Row, Button, Card } from 'react-bootstrap';
import EmployeeForm from './EmployeeForm';
import EmployeeService from '../services/EmployeeService';


export default class CreateEmployee extends React.Component {

    constructor(props) {
        super(props);
        this.employeeService = new EmployeeService();
        this.state = {
            employee: {
                'firstName': 'a',
                'lastName': 'b',
                'birthDate': '',
                'hireDate': '',
                'gender': 'F'
            }
        }
    }

    save = () => {
        console.log("saving :: ", this.state.employee);
        this.employeeService.createEmployee(this.state.employee)
            .then(result => {
                this.setState({ error: null });
            })
            .catch(err => {
                console.log(err);
                this.setState({ error: err });
            })
    }

    handleChange = (e) => {
        console.log('getEmployeeData :: ', e.target.id + "::" + e.target.value);
        this.setState({ employee: { [e.target.id]: e.target.value } });
    }

    render() {

        return (
            <div>
                <Form>
                    <Alert variant='primary'>Employee</Alert>

                    <Card style={{ width: '500px' }}>
                        <Card.Header>Create Employee</Card.Header>
                        <Card.Body>

                            <EmployeeForm employee={this.state.employee} handleChange={this.handleChange} ></EmployeeForm>
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
