import TYPES from './_types' 
import api from '../../api';

export const getProfile = profileId => dispatch => {
	dispatch({type: TYPES.GET_PROFILE.START})

	api.get(`/users/${profileId}`).then(res => {

		dispatch({
			type: TYPES.GET_PROFILE.SUCCESS,
			payload: res.data
		})
	})
}