import React from 'react'
import Todos from '../components/Todos'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { delTodo, toggleTodo, editTodoSave, editTodoMode } from '../actions'
import { MODES } from '../constants'
import PropTypes from 'prop-types'

const getVisibilityFilter = state => state.modesReducer.mode
const getTodos = state => state.todosReducer.todos

const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case MODES.ALL:
        return todos
      case MODES.COMPLETED:
        return todos.filter(todo => todo.completed)
      case MODES.ACTIVE:
        return todos.filter(todo => !todo.completed)
    }
  }
)

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state),
    mode: state.modesReducer.mode
  }
}

// The issue without Reselect
// const mapStateToProps = state => {
//   alert('Пересчет todos')
//   const {todos} = state.todosReducer
//   const {mode} = state.modesReducer
//   return ({
//     todos: todos.filter(todo => {
//       if (mode === MODES.ALL) {
//         return true
//       } else if (mode === MODES.COMPLETED) {
//         return todo.completed
//       } else if (mode === MODES.ACTIVE) {
//         return !todo.completed
//       }
//     }),
//     mode: mode
//   })
// }

const TodosContainer = ({todos, delTodo, toggleTodo, editTodoSave, editTodoMode}) => (
  <Todos
    todos={todos}
    delTodo={delTodo}
    toggleTodo={toggleTodo}
    editTodoSave={editTodoSave}
    editTodoMode={editTodoMode}/>)

  TodosContainer.propTypes = {
    todos: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object
    ]),
    delTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    editTodoSave: PropTypes.func.isRequired,
    editTodoMode: PropTypes.func.isRequired
  }

export default connect(
  mapStateToProps,
  {
    delTodo,
    toggleTodo,
    editTodoSave,
    editTodoMode
  }
)(TodosContainer)
