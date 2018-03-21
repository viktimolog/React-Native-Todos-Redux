import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import PropTypes from 'prop-types';
import { Button, CheckBox } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

const Todo = ({todo, delTodo, toggleTodo}) => (

<View style={styles.container}>

<CheckBox
checked={todo.completed}
onPress={() => toggleTodo(todo.id)}
/>

<TouchableOpacity
style={styles.containerText}
// onPress={this.handleDelete}
>

<Text style={todo.completed ? styles.textCompleted : styles.text}>
{todo.text}
</Text>
</TouchableOpacity>

<TouchableOpacity onPress={() => delTodo(todo.id)}
>
  <Icon name="trash" size={20} color="red"/>
</TouchableOpacity>

</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 72
  },
  containerText: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight: 10
  },
  textCompleted:{
    fontSize: 16,
    textDecorationLine: 'line-through'
  },
  text:{
    fontSize: 16
  }
});

Todo.propTypes = {
	completed: PropTypes.bool
};

export default Todo;
