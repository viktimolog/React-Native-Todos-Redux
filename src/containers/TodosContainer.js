import React from 'react';
import Todos from '../components/Todos';
import {connect} from 'react-redux';
import {delTodo, toggleTodo, editTodoSave, editTodoMode} from '../actions';
import {MODES} from '../constants';
import PropTypes from 'prop-types';

const mapStateToProps = state => {
    const {todos} = state.todosReducer;
    const {mode} = state.modesReducer;
    return ({
        todos: todos.filter(todo => {
            if (mode === MODES.ALL) {
                return true;
            } else if (mode === MODES.COMPLETED) {
                return todo.completed;
            } else if (mode === MODES.ACTIVE) {
                return !todo.completed;
            }
        }),
        mode: mode
    });
}

const TodosContainer = ({todos, delTodo, toggleTodo, editTodoSave, editTodoMode}) => (
    <Todos
        todos={todos}
        delTodo={delTodo}
        toggleTodo={toggleTodo}
        editTodoSave={editTodoSave}
        editTodoMode={editTodoMode}/>);

TodosContainer.propTypes = {
    todos: PropTypes.array.isRequired,
    delTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    editTodoSave: PropTypes.func.isRequired,
    editTodoMode: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    {
        delTodo,
        toggleTodo,
        editTodoSave,
        editTodoMode
    }
)(TodosContainer);
