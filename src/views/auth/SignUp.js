import React, { Component } from 'react';
import Select from 'react-select';
import { Formik } from 'formik';
import { Container, Row, Col } from 'reactstrap';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect, withRouter } from 'react-router-dom';
import { userSignUp } from './_actions';

class SignUp extends Component {
	static specialityOptions = [
		{
			value: 'student',
			label: 'Student'
		},
		{
			value: 'university_student',
			label: 'University student'
		},
		{
			value: 'professor',
			label: 'Professor'
		}
	];

	static scientificFieldOptions = [
		{
			value: 'software_engineering',
			label: 'Πληροφορική'
		},
		{
			value: 'mathematics',
			label: 'Μαθηματικό'
		},
		{
			value: 'physics',
			label: 'Φυσικό'
		}
	];

	static scientificInstitutionOptions = [
		{
			value: 'pireus',
			label: 'Πανεπιστήμιο Πειραιά'
		},
		{
			value: 'ekpa',
			label: 'ΕΚΠΑ'
		},
		{
			value: 'ioannina',
			label: 'Πανεπιστήμιο Ιωαννίνων'
		}
	];

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
				      	scientificField: '',
				      	scientificInstitution: '',
				      	email: '', 
				      	password: ''
				      }}
				      onSubmit={(values, { setSubmitting }) => {
				      	values.speciality =  values.speciality.value;
				      	values.scientificField =  values.scientificField.value;
				      	values.scientificInstitution =  values.scientificInstitution.value;

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
									 			options={SignUp.specialityOptions}
									 			onChange={ option => setFieldValue('speciality', option)}
									 			placeholder="Select Speciality"
									 		>
									 		</Select>
									 	</div>

									 	<div className="form-group">
									 		<label>Scientific Field</label>
									 		<Select
									 			value={ values.scientificField }
									 			options={SignUp.scientificFieldOptions}
									 			onChange={ option => setFieldValue('scientificField', option)}
									 			placeholder="Select Scientific Field"
									 		>
									 		</Select>
									 	</div>

									 	<div className="form-group">
									 		<label>Scientific Institution</label>
									 		<Select
									 			value={ values.scientificInstitution }
									 			options={SignUp.scientificInstitutionOptions}
									 			onChange={ option => setFieldValue('scientificInstitution', option)}
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

