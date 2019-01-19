import TYPES from './_types';
import api from 'api';

export const createGroup = params => dispatch => {
	dispatch({type: TYPES.CREATE_GROUP.START});

	return api.post('/groups', {group: params}).then(res => {

		dispatch({
			type: TYPES.CREATE_GROUP.SUCCESS, 
			payload: {
				group: res.data 
			}
		});

		return res.data._id;
	}).catch(error => {debugger;});
};

export const editGroup = params => dispatch => {
	dispatch({type: TYPES.EDIT_GROUP.START});

	api.put(`/groups/${params._id}`, {group: params}).then(res => {

		dispatch({
			type: TYPES.EDIT_GROUP.SUCCESS, 
			payload: {
				group: res.data 
			}
		});
	}).catch(error => {debugger;});
};

export const getGroup = groupId => dispatch => {
	dispatch({type: TYPES.GET_GROUP.START});

	api.get(`/groups/${groupId}`).then(res => {
		dispatch({
			type: TYPES.GET_GROUP.SUCCESS, 
			payload: {
				group: res.data 
			}
		});
	}).catch(error => {debugger;});
};

