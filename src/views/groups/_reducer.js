import TYPES from './_types';

const initialState = {};

const reducer = (state = initialState, {type, payload}) => {
	switch (type) {
		case TYPES.CREATE_GROUP.SUCCESS:
		case TYPES.EDIT_GROUP.SUCCESS:
		case TYPES.GET_GROUP.SUCCESS:
			return payload.group;

		default:
			return state;
	}
}

export default reducer