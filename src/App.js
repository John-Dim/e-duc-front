import React, { Component } from 'react';
import PrivateRoute from 'router/PrivateRoute';
import Header from 'components/layout/header/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import { getUser } from 'store/actions/user';

import authRoutes from 'views/auth/_routes';
import profileRoutes from 'views/profiles/_routes';
import groupRoutes from 'views/groups/_routes';

const combinedRoutes = [
	...authRoutes,
	...profileRoutes,
	...groupRoutes
];

class App extends Component {

	componentDidMount() {
		if (this.props.token) {
			this.props.getUser();
		}
	}

	componentDidUpdate(prevProps) {
		if (!prevProps.token && this.props.token) {
			this.props.getUser();
		}
	}

  render() {
    return (
			<Router>
				<div>
		    	<Header />
	      	<Switch>
	      		{ 
	      			combinedRoutes.map((route, idx) => {
	      				if (route.private) {
				        	return <PrivateRoute {...route} key={idx} />;
	      				} else {      				
				        	return <Route {...route} key={idx} />;
	      				}
	      			})
	      		}
		      </Switch>
		     </div>
	     </Router>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		token: state.auth.token
	}
}

export default connect(mapStateToProps,
	{
		getUser
	}
)(App);

