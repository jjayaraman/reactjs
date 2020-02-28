import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import employeeReducer from './reducers/employeeReducer';

const store = createStore(employeeReducer,
    composeWithDevTools(applyMiddleware(logger))
)

export default store