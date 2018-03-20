import React from 'react';
import Footer from '../components/Footer';
import {connect} from 'react-redux';
import {setMode} from '../actions';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => ({
	mode: state.mode
});

const AppFooterContainer = ({mode, setMode}) => (
	<Footer mode={mode} setMode={setMode}/>
);

// const AppFooterContainer = ({mode, setMode}) => {
// 	alert('Render AppFooterContainer');
// return(
// 	<Footer mode={mode} setMode={setMode}/>
// );
// }

AppFooterContainer.propTypes = {
	mode: PropTypes.string,
	setMode: PropTypes.func
};

export default connect(
	mapStateToProps,
	{setMode}
)(AppFooterContainer);
