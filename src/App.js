import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './router/PrivateRoute';
import Header from './components/header/Header'
import {Provider} from 'react-redux'

import store from './store';
import routes from './router/routes';

class App extends Component {

  render() {
    return (
  		<Provider store={store}>
  			<div>
		    	<Header />
		      <Router>
		      	<Switch>
		      		{ 
		      			routes.map((route, idx) => {
		      				if (route.private) {
					        	return <PrivateRoute {...route} key={idx} />;
		      				} else {      				
					        	return <Route {...route} key={idx} />;
		      				}
		      			})
		      		}
			      </Switch>
		      </Router>
		     </div>
	     </Provider>
    );
  }
}

export default App;

