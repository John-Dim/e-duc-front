import api from 'api';
import { USER_TYPES } from 'store/_types';

export const getUser = () => dispatch => {
  dispatch({type: USER_TYPES.GET_USER.START});

  api.get('/me').then(res => {
    dispatch({
      type: USER_TYPES.GET_USER.SUCCESS, 
      payload: {
        user: res.data
      }
    });
  }).catch(error => {debugger;})
}