const initialState = {
    count: 0
}

const CountReducer = (state = initialState, action) => {
    let newState = { ...state }
    switch (action.type) {
        case 'INC':
            newState.count++
            break;
        case 'DEC':
            newState.count--
            break;
        default:
            break;
    }
    return newState
}


export default CountReducer