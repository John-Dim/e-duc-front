import {AUTH_TYPES as TYPES} from 'store/_types';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const initialState = { token: cookies.get('token', { expires: 30 }) };

const authReducer = (state=initialState, { type, payload }) => {
	switch (type) {
		case TYPES.USER_SIGN_UP.SUCCESS:
			return { token: payload.token }
		case TYPES.USER_SIGN_IN.SUCCESS:
			return { token: payload.token }
		case TYPES.USER_SIGN_OUT:
			return { token: '' }
		default:
			return state;
	}
}

export default authReducer;