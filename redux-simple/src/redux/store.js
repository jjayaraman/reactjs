import { createStore } from 'redux';
import employeeReducer from './reducers/employeeReducer';


const store = createStore(employeeReducer)

export default store