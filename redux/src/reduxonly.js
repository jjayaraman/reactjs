const { createStore } = require('redux')


const initialState = {
    count: 0
}

const countReducer = (state = initialState, action) => {

    let tempState = { ...state }
    switch (action.type) {
        case 'INC': {
            tempState.count += 1
            break
        }
        case 'DEC': {
            tempState.count -= 1
            break
        }
        default: {
            return tempState
        }
    }
    return tempState
}

const store = createStore(countReducer);

store.subscribe(() => {
    console.log('subsc... ', store.getState());
})

const simpleRedux = () => {
    store.dispatch({ type: 'INC' });
    store.dispatch({ type: 'INC' });
    store.dispatch({ type: 'INC' });
    store.dispatch({ type: 'INC' });
    store.dispatch({ type: 'INC' });
    store.dispatch({ type: 'DEC' });
    store.dispatch({ type: 'DEC' });
    store.dispatch({ type: 'INC' });
    console.log('done');

}

simpleRedux()

