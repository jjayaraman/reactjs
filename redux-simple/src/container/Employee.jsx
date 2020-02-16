import React, { Component } from 'react'
import { connect } from 'react-redux'
import EmployeeList from '../components/EmployeeList'
import AddEmployee from '../components/AddEmployee'


class Employee extends Component {

    constructor(props) {
        super(props)

        this.state = {
            employeeName: '',
            employees: []
        }
    }

    handleOnChange = (e) => {
        const { id, value } = e.target
        this.setState({ ...this.state, [id]: value })
    }

    addEmployee = (e) => {
        //e.preventDefault()
        let tempState = { ...this.state }
        tempState.employees.push(tempState.employeeName)
        tempState.employeeName = ''
        this.setState(tempState)
    }

    render() {
        const { employeeName, employees } = this.state

        return (
            <div>

                <AddEmployee employeeName={employeeName} handleOnChange={this.handleOnChange} addEmployee={this.addEmployee}></AddEmployee>
                <EmployeeList employees={employees}></EmployeeList>

                <br /><br /><br />
                <hr />
                Debugger<br />
                Props :: <pre>{JSON.stringify(this.props, null, 2)}</pre>
                State :: <pre>{JSON.stringify(this.state, null, 2)}</pre>
                <hr />

            </div>

        )
    }
}

const mapStateToProps = (state) => {
    console.log('msp : ', state);
    return { ...state }
}

export default connect(mapStateToProps)(Employee)
