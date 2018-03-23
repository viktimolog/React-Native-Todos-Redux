import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {Content, Text} from 'native-base';
import Todo from './Todo';

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
                        editTodoSave={editTodoSave}
                    />
                )
            }
        </ScrollView>
    </Content>

);

export default Todos;
