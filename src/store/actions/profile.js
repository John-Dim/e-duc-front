import {PROFILE_TYPES as TYPES} from 'store/_types';
import api from 'api';

export const editUser = (userId, params) => dispatch => {
	dispatch({type: TYPES.USER_EDIT.START});

	api.put(`/users/${userId}`, params).then(res => {
		debugger
		dispatch({
			type: TYPES.USER_EDIT.SUCCESS, 
			payload: {
				user: res.data 
			}
		});
	}).catch(error => {debugger;})
}

export const getProfile = userId => dispatch => {
	dispatch({type: TYPES.GET_PROFILE.START});

	api.get(`/users/${userId}`).then(res => {
		dispatch({
			type: TYPES.GET_PROFILE.SUCCESS, 
			payload: {
				profile: res.data.user
			}
		});
	}).catch(error => {debugger;})
}

export const createUserPost = body => dispatch => {
  dispatch({ type: TYPES.CREATE_PROFILE_POSTS.START });
  
  api.post(`/users/posts`, {body})
    .then(res => {
      dispatch({
        type: TYPES.CREATE_PROFILE_POSTS.SUCCESS,
        payload: {
          post: res.data
        }
     })
  }).catch(error => {
      dispatch({
          type: TYPES.CREATE_PROFILE_POSTS.ERROR,
          payload: error
        })    
  })
}