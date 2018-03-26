import React from 'react';
import {Footer, FooterTab, Button, Text, Badge} from 'native-base';
import {MODES} from '../constants';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';

const AppFooter = ({
                       mode = MODES.ALL, todos = [], setMode = () => {}
                   }) => (
    <Footer style={{height: 70}}>
        <FooterTab>
            <Button badge vertical
                    disabled={mode === MODES.ALL}
                    onPress={() => setMode(MODES.ALL)}>
                <Badge>
                    <Text>
                        {todos.length}
                    </Text>
                </Badge>
                <Icon name="tasks" size={20} color="red"/>
                <Text>ALL</Text>
            </Button>
            <Button badge vertical
                    disabled={mode === MODES.ACTIVE}
                    onPress={() => setMode(MODES.ACTIVE)}>
                <Badge>
                    <Text>
                        {todos.filter(todo => todo.completed === false).length}
                    </Text>
                </Badge>
                <Icon name="tasks" size={20} color="yellow"/>
                <Text>Active</Text>
            </Button>
            <Button badge vertical
                    disabled={mode === MODES.COMPLETED}
                    onPress={() => setMode(MODES.COMPLETED)}>
                <Badge>
                    <Text>
                        {todos.filter(todo => todo.completed === true).length}
                    </Text>
                </Badge>
                <Icon name="tasks" size={20} color="green"/>
                <Text>Completed</Text>
            </Button>
        </FooterTab>
    </Footer>
);

Footer.propTypes = {
    mode: PropTypes.string,
    todos: PropTypes.array,
    setMode: PropTypes.func
};

export default AppFooter;
