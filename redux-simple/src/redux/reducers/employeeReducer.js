import uuid from 'uuid'

const initialState = {
    employees: []
}

const employeeReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_EMPLOYEE':
            console.log(state, action);

            let tempState = { ...state }
            action.payload['id'] = uuid.v4()
            tempState.employees.push(action.payload)
            return tempState


        case 'DELETE_EMPLOYEE':
            return {
                ...state,
                employees: state.employees.filter(e => e.id !== action.payload)
            }

        default:
            return { ...state }

    }
}

export default employeeReducer