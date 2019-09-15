import React from 'react';
import { Link } from 'react-router-dom'

export function EmployeeTableRow(props) {
    const { employee } = props;

    return <React.Fragment>
        <tr>
            <td><Link to={`/employee/${employee.id}`}  >{employee.id}</Link></td>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.birthDate}</td>
            <td>{employee.hireDate}</td>
            <td>{employee.gender}</td>
        </tr>
    </React.Fragment >;


}