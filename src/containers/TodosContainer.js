import React from 'react';
import Todos from '../components/Todos';
import {connect} from 'react-redux';
import {setMode, delTodo, addTodo, toggleTodo, editTodoSave, editTodoMode} from '../actions';
import PropTypes from 'prop-types';
import {MODES} from '../constants';

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

const TodosContainer = ({todos, delTodo, toggleTodo, editTodoSave, editTodoMode}) => (
    <Todos
        todos={todos}
        delTodo={delTodo}
        toggleTodo={toggleTodo}
        editTodoSave={editTodoSave}
        editTodoMode={editTodoMode}
    />
);

export default connect(
    mapStateToProps,
    {
        delTodo,
        addTodo,
        toggleTodo,
        editTodoSave,
        editTodoMode
    }
)(TodosContainer);
