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
            },
            errors: {},
            isCreate: true,
            valid: false
        }
    }

    /** For edit employee */
    componentDidMount() {
        this.loadEmployee();
    }

    loadEmployee = () => {

        if (this.props.match && this.props.match.params) {
            const employeeId = this.props.match.params.id;

            if (isNaN(employeeId)) {
                this.setState({ isLoaded: true });
                return;
            }
            this.employeeService.getEmployeeById(employeeId)
                .then(result => {
                    if (result && result.status === 200 && result.data) {
                        this.setState({ error: false, isLoaded: true, employee: result.data, isCreate: false });
                    }
                })
                .catch(err => {
                    this.setState({ error: true, isLoaded: true, employee: null })
                    console.log('err : ', err);
                })

        }
    }

    handleOnChange = e => {
        this.setState(
            {
                employee: { ...this.state.employee, [e.target.id]: e.target.value }
            });

        this.validateField(e);
    }

    handleOnBlur = (e) => {
        this.setState({ touched: { ...this.state.touched, [e.target.id]: true } })
        this.validateField(e);
    }

    validateSchemaFields =
        {
            'firstName': Yup.string().required('First name is required').max(10, 'Max allowed length is 10'),
            'lastName': Yup.string().required('Last name is required'),
            'birthDate': Yup.date().required('Birth date is required'),
            'hireDate': Yup.date().required('Hire Date is required'),
            'gender': Yup.string().required('Gender is required')
        }

    /** Validate a single field */
    validateField(e) {
        const id = e.target.id;

        let dynamicSchemaContent = {};
        dynamicSchemaContent[id] = this.validateSchemaFields[id];

        let employeeData = {}
        employeeData[e.target.id] = e.target.value;

        Yup.object().shape(dynamicSchemaContent).validate(employeeData)
            .then(result => {
                this.setState({ errors: { ...this.state.errors, [id]: undefined } })
                // console.log('validation result ', result);
            }).catch(err => {
                // console.log('validation error :: ', err);
                this.setState({
                    errors: { ...this.state.errors, [id]: err.errors }
                })
            })
    }

    validateAllFields() {
        Yup.object().shape(this.validateSchemaFields).validate(this.state.employee)
            .then(result => {
                console.log('validation result ', result);
                return true;
            }).catch(err => {
                console.log('validation error :: ', err);
                this.setState({ errors: { ...this.state.errors, [err.path]: err.errors } })
                return false;
            });
    }

    reset = () => {
        if (this.state.isCreate) {
            this.setState({
                employee: {
                    'firstName': '',
                    'lastName': '',
                    'birthDate': '',
                    'hireDate': '',
                    'gender': ''
                },
                touched: {},
                errors: {},
                isCreate: true,
                valid: false
            });
        } else {
            this.loadEmployee();
        }
        this.setState({ errors: '' })
    }


    save = () => {
        if (this.validateAllFields()) {
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
    }

    update = () => {
        if (this.validateAllFields()) {
            this.employeeService.updateEmployee(this.state.employee)
                .then(result => {
                    console.log('updated', result);
                    this.props.history.push("/employees");
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    render() {
        const { employee, touched, errors, isCreate } = this.state;

        return (
            <div>
                <Form>
                    <Alert variant='primary'>Employee</Alert>

                    <Card>
                        <Card.Header>{isCreate ? 'Create Employee' : 'Update Employee'}</Card.Header>
                        <Card.Body>

                            <EmployeeForm employee={employee} handleOnChange={this.handleOnChange}
                                handleOnBlur={this.handleOnBlur} touched={touched} errors={errors}></EmployeeForm>
                            <Row>
                                <Col>
                                    <Button variant='warning' type='button' onClick={this.reset} className="mr-1">{isCreate ? 'Clear' : 'Reset'}</Button>
                                    {isCreate && <Button variant='primary' type='button' onClick={this.save} >Create</Button>}
                                    {!isCreate && <Button variant='primary' type='button' onClick={this.update} >Update</Button>}
                                </Col>
                            </Row>

                        </Card.Body>
                    </Card>
                </Form>
            </div >
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