import { USER_TYPES } from 'store/_types';

const initialState = {
	name: '',
	surname: ''
}

const userReducer = (state=initialState, { type, payload }) => {
	switch(type) {
		case USER_TYPES.GET_USER.SUCCESS:
			debugger
			return {...payload.user}
		default: 
			return state;
	}
}

export default userReducer;