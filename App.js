import React, { Component } from 'react';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import { Container } from 'native-base';
import { StatusBar } from 'react-native';
import AppFooterContainer from './src/containers/AppFooterContainer';
import TodosContainer from './src/containers/TodosContainer';
import AppHeaderContainer from './src/containers/AppHeaderContainer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './src/reducers';
import {MODES} from './src/constants';

const initialState = {
	mode: MODES.ALL,
  todos: [
  {id: Math.random(), text: 'Milk 1l', completed: false, editable: false},
  {id: Math.random(), text: 'Eggs Medium 12 pack', completed: true, editable: false},
  {id: Math.random(), text: 'Fresh Basil', completed: false, editable: false},
  {id: Math.random(), text: 'Wholegrain Bread 1 pkg', completed: true, editable: false},
  {id: Math.random(), text: 'Ground Coffee 200g', completed: true, editable: false},
  {id: Math.random(), text: 'Red Wine', completed: false, editable: false},
  {id: Math.random(), text: 'Mozzarella Cheese 150g', completed: false, editable: false},
  {id: Math.random(), text: 'Orange Juice 1l', completed: true, editable: false},
  {id: Math.random(), text: 'Tomatoes', completed: false, editable: false}
]
};

const store = createStore(reducers, initialState);

const App = () => (
<Provider store={store}>
<Container>

      <AppHeaderContainer />

      <StatusBar backgroundColor = 'green' barStyle="light-content" />

      <TodosContainer/>

      <AppFooterContainer/>

</Container>
</Provider>
);

export default App;
