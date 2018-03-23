import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';

import PropTypes from 'prop-types';
import {CheckBox} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {text: props.todo.text};
    }

componentDidUpdate(){
  if (this.props.todo.editable) {
   this.itemInput.focus();
  }
}

    onSubmit = () => {
        if (!this.props.todo.editable) {
            return
        }
        this.props.editTodoSave(this.props.todo.id, this.state.text)
    };

    render() {
        const {todo, delTodo, toggleTodo, editTodoMode, editTodoSave} = this.props;
        return (

            <View style={styles.container}>

                <CheckBox
                    checked={todo.completed}
                    onPress={() => toggleTodo(todo.id)}
                />

                <TouchableOpacity
                    style={styles.containerText}
                    onPress={() => editTodoMode(todo.id)}
                >
                    <TextInput
                              style={todo.completed ? styles.textCompleted : styles.text}
                               value={todo.editable ? this.state.text : todo.text}
                               editable={todo.editable}
                               onChangeText={(text) => this.setState({text})}
                               onSubmitEditing={this.onSubmit}
                               onBlur={todo.editable ? () => editTodoMode(todo.id) : null}
                               ref={(input) => { this.itemInput = input;}}
                               >
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
        height: 72
    },
    containerText: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 25,
        paddingRight: 10
    },
    textCompleted: {
        fontSize: 16,
        textDecorationLine: 'line-through',
        color: 'lightgray'
    },
    text: {
        fontSize: 16,
        color: 'blue'
    }
});
