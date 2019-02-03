import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Formik } from 'formik';

import { connect } from 'react-redux';
import { editUser } from 'store/actions/profile';

class UserEdit extends Component {

	render() {

		if (!this.props.user._id) {
			return false;
		}

		return(
			<Container>
				<Row>
					<Col sm="4">
						<Formik
							initialValues={this.props.user}
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
										    <label>Age</label>
										    <input
										    	type="text" 
										    	name="age"
										    	className="form-control" 
										    	placeholder="Enter Age"
										    	value={values.age}
										    	onChange={handleChange}
										    />
										 	</div>

										  <div className="form-group">
										    <label>Διαμονή</label>
										    <input
										    	type="text" 
										    	name="livesAt"
										    	className="form-control" 
										    	placeholder="Enter location"
										    	value={values.livesAt}
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