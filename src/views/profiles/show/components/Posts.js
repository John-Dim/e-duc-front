import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getPosts, createPost } from 'store/actions/posts';

class Posts extends Component {
  state = {
    newPostBody: ''
  }

  componentDidMount() {
    const { profile: {_id}, getPosts} = this.props;
    getPosts(_id);
  }

  submitNewPost() {
    const newPostBody = this.state.newPostBody;
    if (newPostBody) {
      this.props.createPost(newPostBody)
    }
    this.setState({newPostBody: ''});
  }

  renderWriteNewPost() {
    return(
      <div className="input-group mb-3">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Write a post"
          value={this.state.newPostBody}
          onChange={(e) => this.setState({newPostBody: e.target.value})}
        />
        <div className="input-group-append">
          <button 
            className="btn btn-outline-secondary" 
            type="button"
            onClick={() => this.submitNewPost()}
          >
            Submit
          </button>
        </div>
      </div>
    )
  }

  renderPosts() {
    return(
      <div>
        <h5>Posts</h5>
        <ul className="list-group list-group-flush">
          { this.props.posts.map((post, index) => 
            <li className="list-group-item" key={index}>{post.body}</li>)
          }
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

const mapStateToProps = ({posts}) => ({posts});

export default connect(
  mapStateToProps, 
  { 
    getPosts,
    createPost
  }
)(Posts);