import TYPES from './_types' 
import axios from '../../api';

export const editUser = (userId, params) => dispatch => {
	dispatch({type: TYPES.USER_EDIT.START});

	axios.put(`/users/${userId}`, params).then(res => {
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

	axios.get(`/users/${userId}`).then(res => {
		dispatch({
			type: TYPES.GET_PROFILE.SUCCESS, 
			payload: {
				profile: res.data.user
			}
		});
	}).catch(error => {debugger;})
}