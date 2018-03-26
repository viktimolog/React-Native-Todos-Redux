import React from 'react';
import Footer from '../components/Footer';
import {connect} from 'react-redux';
import {setMode} from '../actions';
import PropTypes from 'prop-types';

const mapStateToProps = state => ({
    mode: state.mode,
    todos: state.todos
});

const AppFooterContainer = ({mode, todos, setMode}) => (
    <Footer
        mode={mode}
        todos={todos}
        setMode={setMode}/>
);

AppFooterContainer.propTypes = {
    mode: PropTypes.string.isRequired,
    todos: PropTypes.array.isRequired,
    setMode: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    {
        setMode,
    }
)(AppFooterContainer);
