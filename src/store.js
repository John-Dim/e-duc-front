import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from 'views/auth/_reducer';
import thunk from 'redux-thunk';
import userReducer from 'store/reducers/user';
import profileReducer from 'views/profiles/_reducer';

const rootReducer = combineReducers(
	{ auth: authReducer,
	  user: userReducer,
	  profile: profileReducer
	});

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));


export default store;
