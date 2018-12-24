import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from 'views/auth/_reducer';
import thunk from 'redux-thunk';
import userReducer from 'store/reducers/user';

const rootReducer = combineReducers({auth: authReducer, user: userReducer});

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));


export default store;
