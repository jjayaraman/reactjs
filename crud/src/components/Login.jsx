import React from 'react';
import { Form, Card, Row, Col, Button } from 'react-bootstrap';

export default class Login extends React.Component {


    render() {
        return (
            <Form>
                <Card style={{ width: '500px' }}>
                    <Card.Header>Login</Card.Header>
                    <Card.Body>
                        <Form.Group controlId="userid">
                            <Row>
                                <Col lg={3}>
                                    <Form.Label>User</Form.Label>
                                </Col>
                                <Col lg={9}>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Row>
                                <Col lg={3}>
                                    <Form.Label>Password</Form.Label>
                                </Col>
                                <Col lg={9}>
                                    <Form.Control type="password" placeholder="Password" />
                                </Col>
                            </Row>
                        </Form.Group>

                        <Button variant="primary" type="submit">Submit</Button>
                    </Card.Body>
                </Card>
            </Form>
        );
    }

}