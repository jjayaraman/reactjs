
import { COUNTER_INC, COUNTER_DEC } from "../action/CounterAction"

const initialState = {
    count: 0
}

const CountReducer = (state = initialState, action) => {
    let newState = { ...state }
    switch (action.type) {
        case COUNTER_INC:
            newState.count += action.value
            break;
        case COUNTER_DEC:
            newState.count -= action.value
            break;
        default:
            break;
    }
    console.log('countreducer returning ', newState);

    return newState
}


export default CountReducer