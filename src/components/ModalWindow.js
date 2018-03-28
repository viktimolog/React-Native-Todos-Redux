import React, {Component} from 'react';
import {
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class ModalWindow extends Component {
    state = {
        modalVisible: false,
        newItemText: '',
        maxLength: 36
    };

    addNewItemHandler = () => {
        if (this.state.newItemText.trim() !== '') {
            this.props.addTodo(this.state.newItemText);
            this.setModalVisible(!this.state.modalVisible);
        }
    }

    newItemTextHandler = val => {
        if (val.length <= this.state.maxLength) {
            this.setState({
                newItemText: val,
            });
        }
    }

    setModalVisible(visible) {
        this.setState({
            modalVisible: visible,
            newItemText: ''
        });
    }

    render() {
        const charactersLeft = `Characters left ${this.state.maxLength - this.state.newItemText.length}`;

        return (
            <View style={{paddingTop: 95}}>
                <Modal
                    animationType='fade'
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(false);
                    }}>
                    <View>
                        <View style={styles.container}>
                            <TouchableHighlight onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }}>
                                <Text style={styles.text}>Cancel</Text>
                            </TouchableHighlight>
                            <Text style={styles.text}>Add new list item</Text>
                            <TouchableHighlight onPress={this.addNewItemHandler}>
                                <Text style={styles.text}>Done</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.containerText}>
                            <Text style={styles.textCenter}>Add new list item</Text>
                        </View>
                        <View style={styles.containerInput}>
                            <TextInput
                                style={styles.text}
                                autoFocus={true}
                                onChangeText={this.newItemTextHandler}
                                value={this.state.newItemText}>
                            </TextInput>
                            <Text style={styles.textRight}>
                                {charactersLeft}
                            </Text>
                        </View>
                    </View>
                </Modal>

                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => {
                        this.setModalVisible(true);
                    }}
                >
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    addButton: {
        backgroundColor: 'green',
        width: 50,
        height: 50,
        borderRadius: 50,
        borderColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
        marginBottom: 96,
        zIndex: 10
    },
    addButtonText: {
        color: '#fff',
        fontSize: 28
    },
    containerInput: {
        paddingLeft: '8%',
        width: '92%',
        paddingTop: 40
    },
    containerText: {
        paddingTop: 50
    },
    textCenter: {
        fontSize: 16,
        textAlign: 'center'
    },
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: 72,
        borderWidth: 0.5,
        borderColor: 'lightgray'
    },
    text: {
        fontSize: 16
    },
    textPlus: {
        fontSize: 28
    },
    textRight: {
        fontSize: 16,
        textAlign: 'right'
    }
});
