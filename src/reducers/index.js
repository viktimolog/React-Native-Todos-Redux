import { SET_MODE, DEL_TODO, ADD_TODO, TOOGLE_TODO } from '../actions/actionTypes';///просто все
import { MODES } from '../constants';

export default (state = [], action) => {
	switch (action.type) {
		case SET_MODE: {
				return Object.assign({}, state, {
					mode: action.mode
				});
		};

		case DEL_TODO: {
			return {
				...state,
				 todos: state.todos.filter(todo => todo.id !== action.id)
			}
		};

		case ADD_TODO: {
			return {
				...state,
				todos: [
					{id: Math.random(), text: action.text, completed: false}
				, ...state.todos]
			}
		};

		case TOOGLE_TODO: {
			let selectedTodo = state.todos.filter(todo => todo.id === action.id)[0];

			let index = state.todos.indexOf(selectedTodo);

			let changedTodo = {id: selectedTodo.id, text: selectedTodo.text
			  , completed: !selectedTodo.completed};

			let updatedArrTodos = state.todos
			                              .filter(todo => todo.id !== action.id);

			updatedArrTodos.splice(index, 0, changedTodo);

			return {
				...state,
				todos: updatedArrTodos
			}
		};

		default:
			return state
	};

};
