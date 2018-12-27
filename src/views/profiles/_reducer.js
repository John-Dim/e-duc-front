import TYPES from './_types';

export default (state= {}, {type, payload}) => {
	switch(type) {
		case TYPES.GET_PROFILE.SUCCESS:
			return payload.profile;
		default:
			return state;
	}
}