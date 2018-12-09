import React, { Component } from 'react';

export default class SignUp extends Component {
	render() {
		return (
			<div>
				Sign Up
				<form>
				  <div class="form-group">
				    <label>Email address</label>
				    <input type="email" class="form-control" placeholder="Enter email" />
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">Password</label>
				    <input type="password" class="form-control" placeholder="Password"/>
				  </div>
				  <button type="submit" class="btn btn-primary">Submit</button>
				</form>
			</div>
		)
	}
}