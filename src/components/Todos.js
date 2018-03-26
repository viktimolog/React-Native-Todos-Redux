import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {Content, Text} from 'native-base';
import Todo from './Todo';
import PropTypes from 'prop-types';

const Todos = ({todos = [], editTodoMode = () => {}, editTodoSave = () => {}, delTodo = () => {}, toggleTodo = () => {}}) => (
    <Content>
        <ScrollView>
            {
                todos.map(todo =>
                    <Todo
                        todo={todo}
                        key={todo.id}
                        delTodo={delTodo}
                        toggleTodo={toggleTodo}
                        editTodoMode={editTodoMode}
                        editTodoSave={editTodoSave}/>)
            }
        </ScrollView>
    </Content>
);

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    delTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    editTodoSave: PropTypes.func.isRequired,
    editTodoMode: PropTypes.func.isRequired
};

export default Todos;
