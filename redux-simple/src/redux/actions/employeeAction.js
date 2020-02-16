

const ADD_EMPLOYEE = (payload) => ({ type: 'ADD_EMPLOYEE', payload })
const DELETE_EMPLOYEE = (payload) => ({ type: 'DELETE_EMPLOYEE', payload })


// const ADD_EMPLOYEE_ACTION = (payload) => {

//     return (dispatch) => {
//         dispatch(ADD_EMPLOYEE(payload))
//     }
// }

// const DELETE_EMPLOYEE_ACTION = (payload) => {

//     return (dispatch) => {
//         dispatch(DELETE_EMPLOYEE(payload))
//     }

// }

export { ADD_EMPLOYEE, DELETE_EMPLOYEE }
//export { ADD_EMPLOYEE, DELETE_EMPLOYEE, ADD_EMPLOYEE_ACTION, DELETE_EMPLOYEE_ACTION }