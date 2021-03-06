import React from 'react';
import { Form, Card, Row, Col, Button } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';

export default class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            values: {
                'username': '',
                'password': ''
            }
        }

    }
    // handleChange = e => {
    //     this.setState({ values: { ...this.state.values, [e.target.id]: e.target.value } })
    // }

    login = () => {
        console.log('state : ', this.state.values)

    }

    render() {
        const { values } = this.state;

        return (
            <div>
                <Formik
                    initialValues={{ 'username': '', 'password': '' }}
                    validate={values => {
                        let errors = {};
                        if (!values.username) {
                            errors.username = 'Required'
                        }
                        if (!values.password) {
                            errors.password = 'Required'
                        }
                        return errors;
                    }}
                    onSubmit={(values) => {
                        alert(JSON.values(values));
                    }}
                >
                    {
                        ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) =>
                            (
                                <Form onSubmit={handleSubmit}>
                                    <Card style={{ width: '500px' }}>
                                        <Card.Header>Login</Card.Header>
                                        <Card.Body>
                                            <Form.Group controlId="username">
                                                <Form.Label>User</Form.Label>
                                                <Form.Control type="email" value={values.username}
                                                    onChange={handleChange} onBlur={handleBlur} placeholder="Enter email" />
                                                <ErrorMessage name="username" component="div" />
                                            </Form.Group>

                                            <Form.Group controlId="password">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" value={values.password}
                                                    onChange={handleChange} onBlur={handleBlur} placeholder="Enter password" />
                                                <ErrorMessage name="password" component="div" />
                                            </Form.Group>

                                            <Button variant="primary" type="button" onClick={this.login} disabled={isSubmitting}>Submit</Button>
                                        </Card.Body>
                                    </Card>
                                </Form>
                            )}
                </Formik>
            </div>
        );
    }

}