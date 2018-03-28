import React, {Component} from 'react';
import {Container} from 'native-base';
import {StatusBar} from 'react-native';
import AppFooterContainer from './src/containers/AppFooterContainer';
import TodosContainer from './src/containers/TodosContainer';
import AppHeaderContainer from './src/containers/AppHeaderContainer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './src/reducers';
import {MODES} from './src/constants';
import realm from './src/realm/RealmSchemas';

const initialState = {
    mode: MODES.ALL,
    todos: realm.objects('Task').sorted('id')
        ? realm.objects('Task').sorted('id')
        : []
};

const store = createStore(reducers, initialState);

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
