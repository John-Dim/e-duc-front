import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Formik } from 'formik';

import { connect } from 'react-redux';
import { editUser } from 'views/profiles/_actions';

class UserEdit extends Component {

	render() {

		if (!this.props.user._id) {
			return false;
		}

		const { name, surname } = this.props.user;

		return(
			<Container>
				<Row>
					<Col sm="4">
						<Formik
							initialValues={{name, surname}}
				      onSubmit={(values, { setSubmitting }) => {
				      	this.props.editUser(this.props.user._id, values)
				      }}
				    >
				    	{
				    		props => {
				    			const { values, handleChange, handleSubmit, setFieldValue } = props;
				    			return(
          					<form onSubmit={handleSubmit}>
										  <div className="form-group">
										    <label>Name</label>
										    <input 
										    	type="text" 
										    	name="name"
										    	className="form-control" 
										    	placeholder="Enter Name"
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
										    	placeholder="Enter Surname"
										    	value={values.surname}
										    	onChange={handleChange}
										    />
										 	</div>

										  <div className="form-group">
										    <label>Phone</label>
										    <input 
										    	type="text" 
										    	name="phone"
										    	className="form-control" 
										    	placeholder="Enter Phone"
										    	value={values.phone}
										    	onChange={handleChange}
										    />
										 	</div>

										  <div className="form-group">
										    <label>Quote</label>
										    <input 
										    	type="text" 
										    	name="quote"
										    	className="form-control" 
										    	placeholder="Enter Quote"
										    	value={values.quote}
										    	onChange={handleChange}
										    />
										 	</div>

										  <div className="form-group">
										    <label>Bio</label>
										    <textarea 
										    	name="bio"
										    	className="form-control" 
										    	placeholder="Enter Bio"
										    	value={values.bio}
										    	onChange={handleChange}
										    />
										 	</div>

										 	<Button color="primary" type="submit">
										 		Submit
										 	</Button>
				    				</form>
				    			)
				    		}
				    	}
						</Formik>
					</Col>
				</Row>
			</Container>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
}

export default connect(
	mapStateToProps,
	{
		editUser
	}
)(UserEdit);