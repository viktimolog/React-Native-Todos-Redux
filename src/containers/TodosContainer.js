import React from 'react';
import Todos from '../components/Todos';
import {connect} from 'react-redux';
import {setMode, delTodo, addTodo, toggleTodo} from '../actions';
import PropTypes from 'prop-types';
import { MODES } from '../constants';

const mapStateToProps = (state) => ({
	todos: state.todos.filter(todo => {
    if (state.mode === MODES.ALL) {
      return true;
    } else if (state.mode === MODES.COMPLETED) {
      return todo.completed;
    } else if (state.mode === MODES.ACTIVE) {
      return !todo.completed;
    }
  }),
	mode: state.mode
});

const TodosContainer =  ({todos, delTodo, toggleTodo}) => (
<Todos  todos = {todos} delTodo={delTodo} toggleTodo={toggleTodo}/>
);

// const TodosContainer =  ({todos, delTodo}) => {
// alert('Render TodosContainer');
// return	(
// <Todos  todos = {todos} delTodo={delTodo}/>
// );
// }

TodosContainer.propTypes = {
	todos: PropTypes.array,
	setMode: PropTypes.func,
};

export default connect(
	mapStateToProps,
	{
		setMode,
		delTodo,
		addTodo,
		toggleTodo
	}
)(TodosContainer);
