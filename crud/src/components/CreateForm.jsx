import React, { Component } from 'react'
import { Form, Col, Row, Card } from 'react-bootstrap'

import Button from 'react-bootstrap/Button';

export default class CreateForm extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }



    render() {
        return (
            <div>

                <Form>
                    <Card style={{ width: '500px' }}>
                        <Card.Header>Employee</Card.Header>
                        <Card.Body>
                            <Form.Group controlId="firstName">
                                <Row>
                                    <Col lg={3}>
                                        <Form.Label>Firstname</Form.Label>
                                    </Col>
                                    <Col lg={9}>
                                        <Form.Control type="text" placeholder="Enter first name" />
                                    </Col>
                                </Row>
                            </Form.Group>

                            <Form.Group controlId="lastname">
                                <Row>
                                    <Col lg={3}>
                                        <Form.Label>lastname</Form.Label>
                                    </Col>
                                    <Col lg={9}>
                                        <Form.Control type="text" placeholder="Enter first name" />
                                    </Col>
                                </Row>
                            </Form.Group>



                            <Button variant="primary" type="submit">Submit</Button>
                        </Card.Body>
                    </Card>
                </Form>

            </div>
        )
    }
}
