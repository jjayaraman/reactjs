import React from 'react';
import PropTypes from 'prop-types'
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
                'birthDate': 1,
                'hireDate': '',
                'gender': ''
            },
            touched: {
                'firstName': false,
                'lastName': false,
                'birthDate': false,
                'hireDate': false,
                'gender': false
            },
            errors: {}
        }
    }



    save = () => {
        console.log("saving :: ", this.state.employee);
        this.employeeService.createEmployee(this.state.employee)
            .then(result => {
                this.setState({ error: null });
                //  this.props.history.push('/employees')
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

    validateSchemaFields =
        {
            'firstName': Yup.string().required('First name is required'),
            'lastName': Yup.string().required('Last name is required'),
            'birthDate': Yup.date().required('Birth date is required'),
            'hireDate': Yup.date().required('Hire Date is required'),
            'gender': Yup.string().required('Gender is required')
        }


    handleOnBlur = (e) => {
        this.validateField(e);
    }

    /** Validate a single field */
    validateField(e) {
        const id = e.target.id;
        console.log('id ', id);

        let dynamicSchemaContent = {};
        dynamicSchemaContent[id] = this.validateSchemaFields[id];

        let employeeData = {}
        employeeData[e.target.id] = e.target.value;

        Yup.object().shape(dynamicSchemaContent).validate(employeeData)
            .then(result => {
                this.setState({ errors: { ...this.state.errors, [id]: undefined } })
                console.log('validation result ', result);
            }).catch(err => {
                console.log('validation error :: ', err);
                this.setState({ errors: { ...this.state.errors, [id]: err.errors } })
            });
    }


    validateAllFields(e) {
        Yup.object().shape(this.vschema).validate(this.state.employee)
            .then(result => {
                console.log('validation result ', result);
            }).catch(err => {
                console.log('validation error :: ', err);
                this.setState({ errors: err.errors })
            });
    }


    render() {
        const { employee, touched, errors } = this.state;

        return (
            <div>
                <Form>
                    <Alert variant='primary'>Employee</Alert>

                    <Card>
                        <Card.Header>Create Employee</Card.Header>
                        <Card.Body>

                            <EmployeeForm employee={employee} handleOnChange={this.handleOnChange}
                                handleOnBlur={this.handleOnBlur} touched={touched} errors={errors}></EmployeeForm>
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


CreateEmployee.prototypes = {
    'firstName': PropTypes.string,
    'lastName': PropTypes.string,
    'birthDate': PropTypes.boolean,
    'hireDate': PropTypes.date,
    'gender': PropTypes.string
}