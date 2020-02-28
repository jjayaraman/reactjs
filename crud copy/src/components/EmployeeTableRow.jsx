import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';

export function EmployeeTableRow(props) {

    const { employee, handleDelete } = props;

    return <React.Fragment>
        <tr>
            <td><Link to={`/employee/${employee.id}`} >{employee.id}</Link></td>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.birthDate}</td>
            <td>{employee.hireDate}</td>
            <td>{employee.gender}</td>
            <td><Button type="button" className="btn btn-danger" onClick={() => handleDelete(employee.id)}>Delete</Button></td>
        </tr>
    </React.Fragment >;


}