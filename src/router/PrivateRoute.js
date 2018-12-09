import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import {isEmpty} from 'lodash';

class PrivateRoute extends Component {
	render() {
		const { path, component, user } = this.props;

		let content;
		// if (isEmpty(user)) {
		if (false) {
			content = <Redirect to='/sign_up'/>;
		} else {
			content = <Route path={path} component={component} />;
		}

		return content;
	}
}

const mapStateToProps = (state) => {
	const {user} = state;

	return {
		user
	}
}

export default connect(mapStateToProps)(PrivateRoute);


