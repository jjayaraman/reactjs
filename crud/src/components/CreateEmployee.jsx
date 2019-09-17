import React from 'react';
import { Alert, Form, Col, Row, Button, Card } from 'react-bootstrap';
import EmployeeForm from './EmployeeForm';
import EmployeeService from '../services/EmployeeService';

import * as  Yup from 'yup'

export default class CreateEmployee extends React.Component {

    constructor(props) {
        super(props);
        this.employeeService = new EmployeeService();
        this.state = {
            employee: {
                'firstName': '',
                'lastName': '',
                'birthDate': '',
                'hireDate': '',
                'gender': ''
            },
            touched: {
                'firstName': false,
                'lastName': false,
                'birthDate': false,
                'hireDate': false,
                'gender': false
            }
        }
    }

    validationSchema =
        Yup.object().shape(
            {
                'firstName': Yup.string()
                    .required('First name is required'),
                //                    .max(10, 'Max 10 characters allowed'),
                'lastName': Yup.string()
                    .required('Last name is required'),
                //                    .min(5, 'At least 5 characters'),
                'birthDate': Yup.date().required('Birth date is required'),
                'hireDate': Yup.date().required('Hire Date is required'),
                'gender': Yup.string().required('Gender is required'),
            }
        )
    save = () => {
        console.log("saving :: ", this.state.employee);
        this.employeeService.createEmployee(this.state.employee)
            .then(result => {
                this.setState({ error: null });
                this.props.history.push('/employees')
            })
            .catch(err => {
                console.log(err);
                this.setState({ error: err });
            })
    }

    handleOnChange = e => {
        this.setState(
            {
                employee: { ...this.state.employee, [e.target.id]: e.target.value },
                touched: { ...this.state.touched, [e.target.id]: e.target.value ? true : false }
            });
    }

    // handleOnBlur = e => {
    //     this.setState(
    //         {
    //             errors: { ...this.state.errors, [e.target.id]: e.target.value }
    //         });
    // }

    handleOnBlur = () => {
        console.log('handle on blur ');

        this.validationSchema.validate(this.state.employee)
            .then(result => {
                console.log('validation result ', result);
                this.setState({ errors: { ...this.state.errors, errors: result } })
            }).catch(err => {
                console.log('validation error :: ', err.value);
                this.setState({ errors: err })
            });
    }


    render() {

        return (
            <div>
                {/* <Form> */}
                <Alert variant='primary'>Employee</Alert>

                <Card>
                    <Card.Header>Create Employee</Card.Header>
                    <Card.Body>

                        <EmployeeForm employee={this.state.employee} handleOnChange={this.handleOnChange}
                            handleOnBlur={this.handleOnBlur} touched={this.state.touched} errors={this.state.errors}></EmployeeForm>
                        <Row>
                            <Col>
                                <Button variant='primary' type='button' onClick={this.save}>Create</Button>
                            </Col>
                        </Row>

                    </Card.Body>
                </Card>
                {/* </Form> */}
            </div>
        );
    }
}
