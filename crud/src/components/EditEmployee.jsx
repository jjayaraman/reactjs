import React from 'react';
import EmployeeForm from './EmployeeForm';
import EmployeeService from '../services/EmployeeService';

export default class EditEmployee extends React.Component {

    constructor() {
        super();
        this.employeeService = new EmployeeService();
        this.state = {
            employee: null
        }
    }

    componentDidMount() {
        const dummyId = 1;
        this.employeeService.getEmployeeById(dummyId)
            .then(result => {
                if (result && result.status === 200 && result.data) {
                    this.setState({ error: false, isLoaded: true, employee: result.data });
                }
            })
            .catch(err => {
                this.setState({ error: true, isLoaded: true, employee: null })
                console.log('err : ', err);
            })
    }

    render() {

        const { error, isLoaded, employee } = this.state;
        console.log('Employee : ', this.state.employee);

        if (error) {
            return (<div>Error</div>);
        } else if (!isLoaded) {
            return (<div>Loading...</div>);
        }
        else {
            return (
                <div>

                    <EmployeeForm employee={employee}></EmployeeForm>
                </div>
            );
        }
    }
}