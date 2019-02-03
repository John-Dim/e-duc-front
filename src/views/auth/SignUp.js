import React, { Component } from 'react';
import Select from 'react-select';
import { Formik } from 'formik';
import { Container, Row, Col } from 'reactstrap';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect, withRouter } from 'react-router-dom';
import { userSignUp } from 'store/actions/auth';

import {  specialityOptions , 
				  fieldOptions, 
				  institutionOptions
				} from 'utils/constants';

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
				      initialValues={{
				      	name: '', 
				      	surname: '',
				      	speciality: '',
				      	field: '',
				      	institution: '',
				      	email: '', 
				      	password: ''
				      }}
				      onSubmit={(values, { setSubmitting }) => {
				      	values.speciality =  values.speciality.value;
				      	values.field =  values.field.value;
				      	values.institution =  values.institution.value;

				      	this.props.userSignUp(values)
				      }}
				    >
				      {props => {
				        const {
				          values,
				          handleChange,
				          handleSubmit,
				          setFieldValue
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
									 		<label>Speciality</label>
									 		<Select
									 			value={ values.speciality }
									 			options={specialityOptions}
									 			onChange={ option => setFieldValue('speciality', option)}
									 			placeholder="Select Speciality"
									 		>
									 		</Select>
									 	</div>

									 	<div className="form-group">
									 		<label>Scientific Field</label>
									 		<Select
									 			value={ values.field }
									 			options={fieldOptions}
									 			onChange={ option => setFieldValue('field', option)}
									 			placeholder="Select Scientific Field"
									 		>
									 		</Select>
									 	</div>

									 	<div className="form-group">
									 		<label>Scientific Institution</label>
									 		<Select
									 			value={ values.institution }
									 			options={institutionOptions}
									 			onChange={ option => setFieldValue('institution', option)}
									 			placeholder="Select Scientific Institution"
									 		>
									 		</Select>
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

