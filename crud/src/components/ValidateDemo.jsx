import React, { Component } from 'react'
// import { Form } from 'react-bootstrap'


import { Formik, Form, ErrorMessage } from 'formik'
import * as  Yup from 'yup'

export default class ValidateDemo extends Component {

    constructor(props) {
        super(props);
        console.log('employee from parent : ', this.props.employee);
    }

    /** Generic handle change events for all fields */
    handleChange = e => {
        this.props.handleChange(e);
    }

    render() {

        const { employee } = this.props;

        const initalValues = {
            'firstName': '',
            'lastName': '',
            'birthDate': '',
            'hireDate': '',
            'gender': ''
        }
        const validationSchema =
            Yup.object().shape(
                {
                    'firstName': Yup.string()
                        .required('First name is required')
                        .length(10)
                        .max(10, 'Max 10 characters allowed'),
                    'lastName': Yup.string()
                        .required('Last name is required')
                        .min(5, 'At least 5 characters'),
                    'birthDate': Yup.date().required('Birth date is required'),
                    'hireDate': Yup.date().required('Hire Date is required'),
                    'gender': Yup.string().required('Gender is required'),
                }
            )

        const render = ({ errors, status, touched }) =>
            (
                <form>
                    <Form.Group controlId="firstName">
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" value={employee.firstName} onChange={this.handleChange} placeholder="Enter first name" />
                        <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                    </Form.Group>

                    <Form.Group controlId="lastName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text" value={employee.lastName} onChange={this.handleChange} placeholder="Enter last name" />
                    </Form.Group>

                    <Form.Group controlId="birthDate">
                        <Form.Label>Date of birth</Form.Label>
                        <Form.Control type="date" value={employee.birthDate} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="hireDate">
                        <Form.Label>Date of hire</Form.Label>
                        <Form.Control type="date" value={employee.hireDate} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="gender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control as="select" value={employee.gender} onChange={this.handleChange}>
                            <option value="">Please select</option>
                            <option value="F">Female</option>
                            <option value="M">Male</option>
                        </Form.Control>
                    </Form.Group>
                </form >
            )

        // onSubmit = (fields) => {
        //     console.log('onSubmit : ', fields);

        // }

        return (
            <Formik
                initalValues={initalValues}
                validationSchema={validationSchema}
                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                }}
                render={render} />
        )
    }
}
