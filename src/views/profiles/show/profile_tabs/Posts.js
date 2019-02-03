import React, {Component} from 'react';
import {Button} from 'reactstrap';

import moment from 'moment';
import {createUserPost} from 'store/actions/profile';
import {connect} from 'react-redux';

class Posts extends Component {
	state = {
		newPost: ''
	}

	renderPosts() {
		return this.props.profile.posts.map((post, index) => {
			return (
				<div className={`profile-post pb-2 mb-2 ${index !== this.props.profile.posts.length - 1 ? 'border-bottom' : ''}`}>
					<div className="d-flex justify-content-between mb-1">
						<div className="font-weight-medium">{this.props.profile.name} {this.props.profile.surname}</div>
						<div>{moment(post.createdAt).format('DD/MM/YYYY HH:mm')}</div>
					</div>
					<div>
						{post.body}
					</div>
				</div>
			)
		})
	}

	handlePostCreation() {
		if (this.state.newPost) {
			this.props.createUserPost(this.state.newPost);
			this.setState({newPost: ''})
		}
	}

	createPost() {
		return(
			<div className="input-group mb-4">
			   <input type="text" 
			   				className="form-control" 
			   				placeholder="Write a new post"
			   				value={this.state.newPost}
			   				onChange={(e) => this.setState({newPost: e.target.value})}/>
			   <span className="input-group-btn">
			   	<Button color="primary" onClick={() => this.handlePostCreation()}>
			   		Post it!
			   	</Button>
			   </span>
			</div>
		)
	}

	render() {
		return(
			<div>
				<div className="font-weight-bold size-16 mb-4 pb-2 border-bottom">Posts</div>
				{this.createPost()}
				{this.renderPosts()}
			</div>
		)
	}
}

export default connect(null, {createUserPost})(Posts)