import axios from 'api';
import { USER_TYPES } from 'store/_types';

export const getUser = () => dispatch => {
	dispatch({type: USER_TYPES.GET_USER.START});

	axios.get('/me').then(res => {
		debugger
		dispatch({
			type: USER_TYPES.GET_USER.SUCCESS, 
			payload: {
				user: res.data
			}
		});
	}).catch(error => {debugger;})
}