import { PROFILE_TYPES as TYPES } from 'store/_types';

export default (state= {}, {type, payload}) => {
	switch(type) {
		case TYPES.GET_PROFILE.SUCCESS:
			return payload.profile;

		case TYPES.CREATE_PROFILE_POSTS.SUCCESS:
			return {
				...state,
				posts: [payload.post, ...state.posts]
			}
			
		default:
			return state;
	}
}