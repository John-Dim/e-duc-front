import { ADMIN_TYPES as TYPES } from '../_types';

const initialState = {
	users: [],
	groups: []
}

const reducer = (state = initialState, { type, payload }) => {
	switch(type) {
		case TYPES.GET_USERS.SUCCESS:
			return {
				...state,
				users: payload.users
			}

		case TYPES.GET_GROUPS.SUCCESS:
			return {
				...state,
				groups: payload.groups
			}

		default:
			return state;
	}
}

export default reducer;