import React, { Component } from 'react'
import { Button } from 'react-bootstrap'


import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as  Yup from 'yup'

export default class ValidateDemo extends Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         employee: {
    //             'firstName': '',
    //             'lastName': '',
    //             'birthDate': '',
    //             'hireDate': '',
    //             'gender': ''
    //         }
    //     }
    // }


    render() {

        // const { employee } = this.state;

        const handleSubmit = (values) => {
            console.log('submitting...', values);

        }

        const initalValues = {
            firstName: '',
            lastName: '',
            birthDate: '',
            hireDate: '',
            gender: ''
        }
        const validationSchema =
            Yup.object().shape(
                {
                    firstName: Yup.string()
                        .required('First name is required'),
                    // .length(10)
                    // .max(10, 'Max 10 characters allowed'),
                    lastName: Yup.string()
                        .required('Last name is required'),
                    // .min(5, 'At least 5 characters'),
                    birthDate: Yup.date().required('Birth date is required'),
                    hireDate: Yup.date().required('Hire Date is required'),
                    gender: Yup.string().required('Gender is required')
                }
            )

        const className = (errors, touched, field) => {
            return 'form-control' + (errors[field] && touched[field] ? ' is-invalid' : '');
        }

        const render = ({ errors, status, touched, values, handleChange, handleBlur, isSubmitting }) =>
            (
                <Form>
                    <div className="form-group">
                        <label htmlFor="firstName">First name</label>
                        <Field name="firstName" type="text" className={className(errors, touched, 'firstName')} placeholder="Enter first name" />
                        <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last name</label>
                        <Field name="lastName" type="text" className={className(errors, touched, 'lastName')} placeholder="Enter last name" />
                        <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="birthDate">Date of birth</label>
                        <Field name="birthDate" type="date" className={className(errors, touched, 'birthDate')} />
                        <ErrorMessage name="birthDate" component="div" className="invalid-feedback" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="hireDate">Date of hire</label>
                        <Field name="hireDate" type="date" className={className(errors, touched, 'hireDate')} />
                        <ErrorMessage name="hireDate" component="div" className="invalid-feedback" />
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <select name="gender" value={values.gender}
                            onChange={handleChange}
                            onBlur={handleBlur}>
                            <option value="">Please select</option>
                            <option value="F">Female</option>
                            <option value="M">Male</option>
                        </select>
                        <ErrorMessage name="gender" component="div" className="invalid-feedback" />
                    </div> */}
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary mr-2" disabled={isSubmitting}>Create</button>
                    </div>
                </Form >
            )

        return (
            <Formik
                initalValues={initalValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                render={render} />
        )
    }
}
