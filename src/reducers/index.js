import {combineReducers} from 'redux';
import todosReducer from './todosReducer';
import modesReducer from './modesReducer';

const rootReducer = combineReducers({
    todosReducer,
    modesReducer
});

export default rootReducer;