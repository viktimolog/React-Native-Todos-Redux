import React, {Component} from 'react';
import {Container} from 'native-base';
import {StatusBar} from 'react-native';
import AppFooterContainer from './src/containers/AppFooterContainer';
import TodosContainer from './src/containers/TodosContainer';
import AppHeaderContainer from './src/containers/AppHeaderContainer';
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => (
    <Provider store={store}>
        <Container>
            <AppHeaderContainer/>
            <StatusBar backgroundColor='green' barStyle="light-content"/>
            <TodosContainer/>
            <AppFooterContainer/>
        </Container>
    </Provider>
);

export default App;
