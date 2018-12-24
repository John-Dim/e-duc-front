import React, { Component } from 'react';
import { Formik } from 'formik';
import { Container, Row, Col } from 'reactstrap';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect, withRouter } from 'react-router-dom';
import { userSignUp } from './_actions';

class SignUp extends Component {
	render() {
		if (this.props.token) {
			return <Redirect to="/" />
		}

		return (
			<Container>
				<Row>
					<Col sm={{size: 4, offset: 4}}>
						Sign Up
				    <Formik
				      initialValues={{ email: '', password: '', name: '', surname: '' }}
				      onSubmit={(values, { setSubmitting }) => {
				      	debugger
				      	this.props.userSignUp(values)
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
									    <label>Name</label>
									    <input 
									    	type="text" 
									    	name="name"
									    	className="form-control" 
									    	placeholder="Το όνομά σας"
									    	value={values.name}
									    	onChange={handleChange}
									    />
									  </div>
									  <div className="form-group">
									    <label>Surname</label>
									    <input 
									    	type="text" 
									    	name="surname"
									    	className="form-control" 
									    	placeholder="Το επίθετό σας"
									    	value={values.surname}
									    	onChange={handleChange}
									    />
									  </div>
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
			userSignUp
		}
	),
	withRouter
)(SignUp);

