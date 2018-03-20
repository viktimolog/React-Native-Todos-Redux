import React, {Component} from 'react';
import Header from '../components/Header';
import {connect} from 'react-redux';
import {addTodo} from '../actions';
import PropTypes from 'prop-types';

// const mapStateToProps = (state) => ({
// 	todos: state.todos
// });

const AppHeaderContainer = ({addTodo}) => (
	<Header	addTodo={addTodo}/>
);

// const AppHeaderContainer = ({addTodo}) => {
// 	alert('Render AppHeaderContainer');
// 	return(
// 		<Header	addTodo={addTodo}/>
// 	);
// }

AppHeaderContainer.propTypes = {
	addTodo: PropTypes.func
};

export default connect(
	null,
	{addTodo}
)(AppHeaderContainer);
