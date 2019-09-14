import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

export default class EmployeeForm extends Component {

    constructor(props) {
        super(props);
        console.log('this.props.employee ', this.props.employee);
    }

    /** Generic handle change events for all fields */
    handleChange = e => {
        this.props.employee[e.target.id] = e.target.value;
    }


    render() {

        const { employee } = this.props;

        return (
            <div>

                <Form.Group controlId="firstName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" value={employee.firstName} onChange={this.handleChange} placeholder="Enter first name" />
                </Form.Group>

                <Form.Group controlId="lastname">
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


            </div>
        )
    }
}
