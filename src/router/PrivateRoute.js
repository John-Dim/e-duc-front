import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import {isEmpty} from 'lodash';

class PrivateRoute extends Component {
	render() {
		const { path, component, auth } = this.props;

		let content;
		if (!auth.token) {
			content = <Redirect to='/signup'/>;
		} else {
			content = <Route path={path} component={component} />;
		}

		return content;
	}
}

const mapStateToProps = (state) => {
	const {auth} = state;

	return {
		auth
	}
}

export default connect(mapStateToProps)(PrivateRoute);


