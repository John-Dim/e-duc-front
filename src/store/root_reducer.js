import { combineReducers } from 'redux';

import auth from 'store/reducers/auth';
import user from 'store/reducers/user';
import admin from 'store/reducers/admin';
import profile from 'store/reducers/profile';
import group from 'views/groups/_reducer';
import posts from 'store/reducers/posts';

const rootReducer = combineReducers({ 
	auth,
  user,
  admin,
  profile,
  posts,
  group
});

export default rootReducer;