import React from 'react';
import EmployeeForm from './EmployeeForm';
import EmployeeService from '../services/EmployeeService';
import { Card, Button, Alert } from 'react-bootstrap';

export default class EditEmployee extends React.Component {

    constructor(props) {
        super(props);
        this.employeeService = new EmployeeService();
        this.state = {
            error: false,
            isLoaded: false,
            employee: {
                'firstName': '',
                'lastName': '',
                'birthDate': '',
                'hireDate': '',
                'gender': ''
            }
        }
        console.log('this.props', this.props.match.params);

    }

    componentDidMount() {
        console.log(' this.props', this.props);
        if (this.props.match && this.props.match.params) {
            const employeeId = this.props.match.params.id;
            console.log(' employeeId', employeeId);

            if (isNaN(employeeId)) {
                this.setState({ isLoaded: true });
                return;
            }
            this.employeeService.getEmployeeById(employeeId)
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
    }

    handleOnChange = e => {
        // let employee = this.state.employee;
        // employee[e.target.id] = e.target.value;
        // this.setState({ employee })
        this.setState({ employee: { ...this.state.employee, [e.target.id]: e.target.value } })
    }

    handleOnBlur = e => {
        this.setState(
            {
                errors: { ...this.state.errors, [e.target.id]: e.target.value }
            });
    }

    update = () => {

        this.employeeService.updateEmployee(this.state.employee)
            .then(result => {
                console.log('updated', result);
                this.props.history.push("/employees");
            })
            .catch(err => {
                console.log(err);
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
                    <Card>
                        <Card.Header>Edit Employee</Card.Header>
                        <Card.Body>
                            <EmployeeForm employee={employee} handleOnChange={this.handleOnChange} handleOnBlur={this.handleOnBlur}></EmployeeForm>
                            <Button variant='primary' type='button' onClick={this.update}>Update</Button>

                        </Card.Body>
                    </Card>
                </div>
            );
        }
    }
}