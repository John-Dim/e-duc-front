import { ADMIN_TYPES as TYPES } from '../_types';
import api from 'api';

export const getUsers = () => dispatch => {
  dispatch({type: TYPES.GET_USERS.START});

  api.get('/users').then(res => {
    dispatch({
      type: TYPES.GET_USERS.SUCCESS, 
      payload: {
        users: res.data
      }
    });
  }).catch(error => {debugger;})
}

export const getGroups = () => dispatch => {
  dispatch({type: TYPES.GET_GROUPS.START});

  api.get('/groups').then(res => {
    dispatch({
      type: TYPES.GET_GROUPS.SUCCESS, 
      payload: {
        groups: res.data
      }
    });
  }).catch(error => {debugger;})
}