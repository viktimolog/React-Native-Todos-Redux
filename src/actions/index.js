import { SET_MODE, DEL_TODO, ADD_TODO, TOOGLE_TODO } from './actionTypes';

export const setMode = mode => ({type: SET_MODE, mode});

export const delTodo = id => ({type: DEL_TODO, id});

export const addTodo = text => ({type: ADD_TODO, text});

export const toggleTodo = id => ({type: TOOGLE_TODO, id});
