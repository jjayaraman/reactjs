import React, { Component } from 'react'
import { connect } from 'react-redux'
import EmployeeList from '../components/EmployeeList'
import AddEmployee from '../components/AddEmployee'
import uuid from 'uuid'

class Employee extends Component {

    constructor(props) {
        super(props)

        this.state = {
            employee: { id: '', name: '' },
            employees: []
        }
    }

    handleOnChange = (e) => {
        const { id, value } = e.target
        let tempState = { ...this.state }
        tempState.employee[id] = value
        this.setState(tempState)
    }

    addEmployee = (e) => {
        //e.preventDefault()
        let tempState = { ...this.state }
        tempState.employee['id'] = uuid.v4()
        tempState.employees.push({ ...tempState.employee })
        tempState.employee = { id: '', name: '' }
        this.setState(tempState)
    }

    deleteEmployee = (id) => {
        let tempState = { ...this.state }
        tempState.employees = tempState.employees.filter(e => e.id !== id)
        this.setState(tempState)
    }


    render() {
        const { employee, employees } = this.state

        return (
            <div>

                <AddEmployee employee={employee} handleOnChange={this.handleOnChange} addEmployee={this.addEmployee}></AddEmployee>
                <EmployeeList employees={employees} deleteEmployee={this.deleteEmployee}></EmployeeList>

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
