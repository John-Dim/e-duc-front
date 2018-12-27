import { USER_TYPES } from 'store/_types';
import AUTH_TYPES from 'views/auth/_types';

const initialState = {
	name: '',
	surname: ''
}

const userReducer = (state=initialState, { type, payload }) => {
	switch(type) {
		case USER_TYPES.GET_USER.SUCCESS:
			return {...payload.user}
		case AUTH_TYPES.USER_SIGN_OUT:
			return initialState
		default: 
			return state;
	}
}

export default userReducer;