import React, { Component } from 'react';
import { Formik } from 'formik';
import { Container, Row, Col } from 'reactstrap';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect, withRouter } from 'react-router-dom';
import { userSignIn } from './_actions';

class SignIn extends Component {
	render() {
		if (this.props.token) {
			return <Redirect to="/" />
		}

		return(
			<Container>
				<Row>
					<Col sm={{size: 4, offset: 4}}>
						Sign In
				    <Formik
				      initialValues={{ 
				      	email: '',
				      	password: '' 
				      }}
				      onSubmit={(values, { setSubmitting }) => {
				      	this.props.userSignIn(values)
				      }}
				    >
				      {props => {
				        const {
				          values,
				          handleChange,
				          handleSubmit
				        } = props;
				        return (
          				<form onSubmit={handleSubmit}>
									  <div className="form-group">
									    <label>Email address</label>
									    <input 
									    	type="email" 
									    	name="email"
									    	className="form-control" 
									    	placeholder="Enter email"
									    	value={values.email}
									    	onChange={handleChange}
									    />
									  </div>
									  <div className="form-group">
									    <label>Password</label>
									    <input 
									    	type="password" 
									    	name="password"
									    	className="form-control" 
									    	placeholder="Enter password"
									    	value={values.password}
									    	onChange={handleChange}
									    />
									  </div>
									  <button type="submit" className="btn btn-primary">Submit</button>
									 </form>
				        );
				      }}
				    </Formik>
					</Col>
				</Row>
			</Container>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		token: state.auth.token
	}
} 

export default compose(
	connect(mapStateToProps, 
		{
			userSignIn
		}
	),
	withRouter
)(SignIn);

