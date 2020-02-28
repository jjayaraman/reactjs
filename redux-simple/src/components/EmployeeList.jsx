import React from 'react'

const EmployeeList = (props) => {

    return (
        <div>
            <ol>
                {props.employees.map((e, idx) =>
                    <li key={idx} >

                        <div style={{ width: '50%' }}>
                            {e.name}
                            <button type='button' onClick={() => props.deleteEmployee(e.id)} >X</button>
                        </div>

                    </li>)}
            </ol>

        </div>
    )
}

export default EmployeeList