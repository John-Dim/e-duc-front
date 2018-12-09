import React, { Component } from 'react';

export default class Posts extends Component {

	renderWriteNewPost() {
		return(
			<div className="input-group mb-3">
			  <input type="text" className="form-control" placeholder="Write a post"/>
			  <div className="input-group-append">
			    <button className="btn btn-outline-secondary" type="button">Submit</button>
			  </div>
			</div>
		)
	}

	renderPosts() {
		return(
			<div>
				<h5>Posts</h5>
				<ul className="list-group list-group-flush">
				  <li className="list-group-item">Cras justo odio</li>
				  <li className="list-group-item">Dapibus ac facilisis in</li>
				  <li className="list-group-item">Morbi leo risus</li>
				  <li className="list-group-item">Porta ac consectetur ac</li>
				  <li className="list-group-item">Vestibulum at eros</li>
				</ul>
			</div>
		)
	}

	render() {
		return(
			<div className="card p-3">
				{this.renderWriteNewPost()}
				{this.renderPosts()}
			</div>
		)
	}	
}
