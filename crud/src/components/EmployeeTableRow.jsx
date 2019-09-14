import React from 'react';

export function EmployeeTableRow(props) {
    console.log(props);
    const { employee } = props;

    return <React.Fragment>
        <tr>
            <td><a href={'/employee/' + employee.id}>{employee.id}</a></td>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.birthDate}</td>
            <td>{employee.hireDate}</td>
            <td>{employee.gender}</td>
        </tr>
    </React.Fragment >;


}