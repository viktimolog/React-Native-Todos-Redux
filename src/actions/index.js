import {SET_MODE, DEL_TODO, ADD_TODO, TOOGLE_TODO, EDIT_TODO_MODE, EDIT_TODO_SAVE} from './actionTypes';

export const setMode = mode => ({type: SET_MODE, mode});

export const delTodo = id => ({type: DEL_TODO, id});

export const addTodo = text => ({type: ADD_TODO, text});

export const toggleTodo = id => ({type: TOOGLE_TODO, id});

export const editTodoMode = id => ({type: EDIT_TODO_MODE, id});

export const editTodoSave = (id, text) => ({type: EDIT_TODO_SAVE, id, text});
