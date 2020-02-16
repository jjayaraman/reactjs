import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'


import { Formik, ErrorMessage } from 'formik'
import * as  Yup from 'yup'

export default class ValidateDemo extends Component {

    constructor() {
        super();
        this.state = {
            employee: {
                'firstName': '',
                'lastName': '',
                'birthDate': '',
                'hireDate': '',
                'gender': ''
            }
        }
    }


    render() {

        const { employee } = this.state;

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

        const render = ({ errors, status, touched, handleChange, handleBlur, }) =>
            (
                <form>
                    <Form.Group controlId="firstName">
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" value={employee.firstName} onChange={handleChange} placeholder="Enter first name" />
                        <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                    </Form.Group>

                    <Form.Group controlId="lastName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text" value={employee.lastName} onChange={handleChange} placeholder="Enter last name" />
                    </Form.Group>

                    <Form.Group controlId="birthDate">
                        <Form.Label>Date of birth</Form.Label>
                        <Form.Control type="date" value={employee.birthDate} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group controlId="hireDate">
                        <Form.Label>Date of hire</Form.Label>
                        <Form.Control type="date" value={employee.hireDate} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group controlId="gender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control as="select" value={employee.gender} onChange={handleChange}>
                            <option value="">Please select</option>
                            <option value="F">Female</option>
                            <option value="M">Male</option>
                        </Form.Control>
                    </Form.Group>


                    <Button variant='primary'>Create</Button>
                </form >
            )

        // onSubmit = (fields) => {
        //     console.log('onSubmit : ', fields);

        // }

        return (
            <Formik
                initalValues={initalValues}
                validationSchema={validationSchema}
                onSubmit={values => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(values, null, 4))
                }}
                render={render} />
        )
    }
}
