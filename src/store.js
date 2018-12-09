import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import profileReducer from './views/profiles/reducer'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({profile: profileReducer});

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));


export default store;
