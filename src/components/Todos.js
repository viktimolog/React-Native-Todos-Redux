import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Content, Text } from 'native-base';
import Todo from './Todo';

const Todos = ({todos = [], delTodo = () => {}, toggleTodo = () => {}}) => (
<Content>
<ScrollView>
{
    todos.map(todo =>
        <Todo
        todo={todo}
        key={todo.id}
        delTodo={delTodo}
        toggleTodo={toggleTodo}
        />
    )
}
</ScrollView>
</Content>

);

export default Todos;
