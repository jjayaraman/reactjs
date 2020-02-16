import React from 'react'

const AddEmployee = (props) => {

    return (
        <div>
            <h4>Add Employee</h4>

            <label htmlFor="name">Name</label>
            <input id='name' value={props.employee.name} onChange={props.handleOnChange}></input>
            <button type='button' value='Add' onClick={props.addEmployee}>Add</button>
        </div>
    )
}


export default AddEmployee
