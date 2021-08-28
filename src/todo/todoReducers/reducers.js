import { combineReducers } from 'redux';
import todoReducer from './todoReducer';


const rootReducer = combineReducers({
   field: todoReducer
})


export default rootReducer