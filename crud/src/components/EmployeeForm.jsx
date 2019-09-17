import React, { Component } from 'react'
import { Form } from 'react-bootstrap'


export default class EmployeeForm extends Component {

    constructor(props) {
        super(props);
    }

    initalValues = {
        'firstName': '',
        'lastName': '',
        'birthDate': '',
        'hireDate': '',
        'gender': ''
    }



    render() {

        const { employee, handleOnChange, handleOnBlur, touched, errors } = this.props;

        return (
            <div>
                <pre style={{ color: "brown", border: "1px solid blue", padding: '5px' }}>
                    <b>Debuger</b> <br></br>
                    {JSON.stringify(this.props, null, 3)}
                </pre>
                <br></br>
                <form>
                    <Form.Group controlId="firstName">
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" value={employee.firstName} onChange={handleOnChange} onBlur={handleOnBlur} placeholder="Enter first name" />

                    </Form.Group>

                    <Form.Group controlId="lastName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text" value={employee.lastName} onChange={handleOnChange} placeholder="Enter last name" />
                    </Form.Group>

                    <Form.Group controlId="birthDate">
                        <Form.Label>Date of birth</Form.Label>
                        <Form.Control type="date" value={employee.birthDate} onChange={handleOnChange} onBlur={handleOnBlur} />
                    </Form.Group>

                    <Form.Group controlId="hireDate">
                        <Form.Label>Date of hire</Form.Label>
                        <Form.Control type="date" value={employee.hireDate} onChange={handleOnChange} />
                    </Form.Group>

                    <Form.Group controlId="gender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control as="select" value={employee.gender} onChange={handleOnChange}>
                            <option value="">Please select</option>
                            <option value="F">Female</option>
                            <option value="M">Male</option>
                        </Form.Control>
                    </Form.Group>
                </form >
            </div>
        )
    }
}
