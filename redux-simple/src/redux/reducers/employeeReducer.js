

const employeeReducer = (state, action) => {

    switch (action.type) {
        case 'ADD_EMPLOYEE':
            return {
                ...state,
                payload: state.payload
            }


        default:
            return { ...state }

    }
}

export default employeeReducer