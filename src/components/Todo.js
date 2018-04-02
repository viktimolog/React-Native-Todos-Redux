import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native'

import { CheckBox } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Todo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: props.todo.text,
      maxLength: 46
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      text: nextProps.todo.text
    })
  }

  componentDidUpdate () {
    if (this.props.todo.editable) {
      this.itemInput.focus()
    }
  }

  onSubmit = () => {
    if (this.props.todo.editable)
      this.props.editTodoSave(this.props.todo.id, this.state.text)
  }

  render () {
    const {todo, delTodo, toggleTodo, editTodoMode} = this.props
    return (
      <View style={styles.container}>
        <CheckBox
          checked={todo.completed}
          onPress={() => toggleTodo(todo.id)}/>
        <TouchableOpacity
          style={styles.containerText}
          onPress={() => editTodoMode(todo.id)}>
          <TextInput
            multiline={true}
            numberOfLines={3}
            blurOnSubmit={true}
            style={todo.completed
              ? styles.textCompleted
              : styles.text}
            value={todo.editable
              ? this.state.text
              : todo.text.slice(0,)}
            editable={todo.editable}
            onChangeText={text => text.length <= this.state.maxLength
              ? this.setState({text})
              : null}
            onSubmitEditing={this.onSubmit}
            onBlur={todo.editable
              ? () => editTodoMode(todo.id)
              : null}
            ref={input => {
              this.itemInput = input
            }}>
          </TextInput>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => delTodo(todo.id)}>
          <Icon name="trash" size={20} color="red"/>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 80
  },
  containerText: {
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: 30,
    marginRight: 20
  },
  textCompleted: {
    fontSize: 16,
    color: 'lightgray'
  },
  text: {
    fontSize: 16,
    color: 'blue'
  }
})