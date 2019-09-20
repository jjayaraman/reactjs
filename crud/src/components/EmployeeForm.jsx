import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap'

function EmployeeForm(props) {

    // const initalValues = {
    //     'firstName': '',
    //     'lastName': '',
    //     'birthDate': '',
    //     'hireDate': '',
    //     'gender': ''
    // }

    const { employee, handleOnChange, handleOnBlur, errors } = props;

    return (
        <div>
            <pre style={{ color: "brown", border: "1px solid blue", padding: '5px' }}>
                <b>Debug Props</b> <br></br>
                {JSON.stringify(props, null, 3)}
            </pre>
            <br></br>

            <Form.Group controlId="firstName">
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" value={employee.firstName} onChange={handleOnChange} onBlur={handleOnBlur} placeholder="Enter first name" />
                <div className='error'>{errors.firstName}</div>
            </Form.Group>

            <Form.Group controlId="lastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" value={employee.lastName} onChange={handleOnChange} onBlur={handleOnBlur} placeholder="Enter last name" />
                <div className='error'>{errors.lastName}</div>
            </Form.Group>

            <Form.Group controlId="birthDate">
                <Form.Label>Date of birth</Form.Label>
                <Form.Control type="date" value={employee.birthDate} onChange={handleOnChange} onBlur={handleOnBlur} />
                <div className='error'>{errors.birthDate}</div>
            </Form.Group>

            <Form.Group controlId="hireDate">
                <Form.Label>Date of hire</Form.Label>
                <Form.Control type="date" value={employee.hireDate} onChange={handleOnChange} onBlur={handleOnBlur} />
                <div className='error'>{errors.hireDate}</div>
            </Form.Group>

            <Form.Group controlId="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Control as="select" value={employee.gender} onChange={handleOnChange} onBlur={handleOnBlur}>
                    <option value="">Please select</option>
                    <option value="F">Female</option>
                    <option value="M">Male</option>
                </Form.Control>
                <div className='error'>{errors.gender}</div>
            </Form.Group>
        </div>
    )
}

// EmployeeForm.propTypes = {
//     'firstName': PropTypes.string,
//     'lastName': PropTypes.string,
//     'birthDate': PropTypes.string,
//     'hireDate': PropTypes.string,
//     'gender': PropTypes.string
// }

export default EmployeeForm
