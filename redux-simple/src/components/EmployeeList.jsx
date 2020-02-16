import React from 'react'

const EmployeeList = (props) => {

    return (
        <div>
            <ol>
                {props.employees.map(e =>
                    <li key={e} >

                        <div style={{ width: '50%' }}>
                            {e}
                            <button type='button' onClick={props.delete} >X</button>
                        </div>

                    </li>)}
            </ol>

        </div>
    )
}

export default EmployeeList