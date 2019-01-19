import React, { Component } from 'react';
import { Formik } from 'formik';

export default class GroupForm extends Component {
	render() {
		const {initialValues, onSubmit} = this.props;

		return(
	    <Formik
	      initialValues={initialValues}
	      onSubmit={(values, { setSubmitting }) => {
	      	onSubmit(values)
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
						    <label>Title</label>
						    <input 
						    	type="text" 
						    	name="title"
						    	className="form-control" 
						    	placeholder="Enter group title"
						    	value={values.title}
						    	onChange={handleChange}
						    />
						  </div>
						  <div className="form-group">
						    <label>Description</label>
						    <input 
						    	type="text" 
						    	name="description"
						    	className="form-control" 
						    	placeholder="Enter group description"
						    	value={values.description}
						    	onChange={handleChange}
						    />
						  </div>
						  <button type="submit" className="btn btn-primary">Submit</button>
						 </form>
	        );
	      }}
	    </Formik>
		)
	}
}