import React from 'react';
import Footer from '../components/Footer';
import {connect} from 'react-redux';
import {setMode} from '../actions';
import PropTypes from 'prop-types';

const mapStateToProps = state => ({
    mode: state.mode,
    todos: state.todos
});

const AppFooterContainer = ({todos, mode, setMode}) => (
        <Footer
            todos={todos}
            mode={mode}
            setMode={setMode}/>);

AppFooterContainer.propTypes = {
    todos: PropTypes.object.isRequired,
    mode: PropTypes.string.isRequired,
    setMode: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    {
        setMode,
    }
)(AppFooterContainer);
