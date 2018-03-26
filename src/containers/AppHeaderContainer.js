import React, {Component} from 'react';
import Header from '../components/Header';
import {connect} from 'react-redux';
import {addTodo} from '../actions';
import PropTypes from 'prop-types';

const AppHeaderContainer = ({addTodo}) => (
    <Header addTodo={addTodo}/>
);

AppHeaderContainer.propTypes = {
    addTodo: PropTypes.func.isRequired
};

export default connect(
    null,
    {addTodo}
)(AppHeaderContainer);
