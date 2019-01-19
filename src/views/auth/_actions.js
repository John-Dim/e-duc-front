import TYPES from './_types';
import Cookies from 'universal-cookie';
import moment from 'moment';
import axios from 'api';

const cookies = new Cookies();

export const userSignUp = params => dispatch => {
	dispatch({type: TYPES.USER_SIGN_UP.START});

	axios.post('/signup', params).then(res => {
		const token = res.data.token;
		cookies.set('token', token, {expires: moment().add(20, 'days').toDate()});
		dispatch({
			type: TYPES.USER_SIGN_UP.SUCCESS, 
			payload: {
				token 
			}
		});
	}).catch(error => {debugger;})
}

export const userSignIn = params => dispatch => {
	dispatch({type: TYPES.USER_SIGN_IN.START});

	axios.post('/signin', params).then(res => {
		const token = res.data.token;
		cookies.set('token', token, {expires: moment().add(20, 'days').toDate()});

		dispatch({
			type: TYPES.USER_SIGN_IN.SUCCESS, 
			payload: {
				token 
			}
		});
	}).catch(error => {debugger;})
}

export const userSignOut = () => {
	cookies.remove('token');
	return { type: TYPES.USER_SIGN_OUT }
};
