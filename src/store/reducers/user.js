import { USER_TYPES, AUTH_TYPES} from 'store/_types';

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