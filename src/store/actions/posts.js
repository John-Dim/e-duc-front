import api from 'api';
import { POSTS_TYPES } from 'store/_types';

export const getPosts = userId => dispatch => {
  dispatch({ type: POSTS_TYPES.GET_POSTS.START });
  
  api.get(`/users/${userId}/posts`)
    .then(res => {
      dispatch(
        {
          type: POSTS_TYPES.GET_POSTS.SUCCESS,
          payload: {
            posts: res.data
          }
        })
  }).catch(error => {
      dispatch(
        {
          type: POSTS_TYPES.GET_POSTS.ERROR,
          payload: error
        })    
  })
}

export const createPost = body => dispatch => {
  dispatch({ type: POSTS_TYPES.CREATE_POST.START });
  
  api.post(`/posts`, {body})
    .then(res => {
      dispatch(
        {
          type: POSTS_TYPES.CREATE_POST.SUCCESS,
          payload: {
            post: res.data
          }
        })
  }).catch(error => {
      dispatch(
        {
          type: POSTS_TYPES.CREATE_POST.ERROR,
          payload: error
        })    
  })
}