import React from 'react';
import { Alert, Form, Col, Row, Button, Card } from 'react-bootstrap';
import EmployeeForm from './EmployeeForm';


export default class CreateEmployee extends React.Component {

    constructor() {
        super();
        this.state = {
            values: []
        }
    }

    save = () => {
        console.log(this.state.values);

    }

    render() {
        return (
            <div>
                <Form>
                    <Alert variant='primary'>Employee</Alert>

                    <Card style={{ width: '500px' }}>
                        <Card.Header>Create Employee</Card.Header>
                        <Card.Body>

                            <EmployeeForm values={this.state.values}></EmployeeForm>
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
