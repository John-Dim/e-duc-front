import { createStore, combineReducers, applyMiddleware } from 'redux';

import auth from 'views/auth/_reducer';
import user from 'store/reducers/user';
import profile from 'views/profiles/_reducer';
import group from 'views/groups/_reducer';
import posts from 'store/reducers/posts';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({ 
	auth,
  user,
  profile,
  posts,
  group
});

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));


export default store;
