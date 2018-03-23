import React from 'react';
import Footer from '../components/Footer';
import {connect} from 'react-redux';
import {setMode, addTodo, delTodo, toggleTodo} from '../actions';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => ({
    mode: state.mode,
    todos: state.todos
});

const AppFooterContainer = ({mode, todos, setMode}) => (
    <Footer mode={mode} todos={todos} setMode={setMode}/>
);

AppFooterContainer.propTypes = {
    mode: PropTypes.string,
    todos: PropTypes.array,
    setMode: PropTypes.func
};

export default connect(
    mapStateToProps,
    {
        setMode,
        delTodo,
        addTodo,
        toggleTodo
    }
)(AppFooterContainer);
