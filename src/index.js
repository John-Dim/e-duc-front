import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'

import store from 'store';

import './assets/stylesheets/main.scss'

import HeaderMock from 'components/layout/HeaderMock';
import ProfileMock from 'views/profiles/ProfileMock';
import GroupMock from 'views/groups/GroupMock';
import MessagesMock from 'views/messages/MessagesMock';


// ReactDOM.render(
// 	<Fragment>
// 		<HeaderMock/>
// 		<MessagesMock/>
// 	</Fragment>
// , 
// document.getElementById('root'));

// ReactDOM.render(
// 	<Fragment>
// 		<HeaderMock/>
// 		<GroupMock/>
// 	</Fragment>
// , 
// document.getElementById('root'));

// ReactDOM.render(
// 	<Fragment>
// 		<HeaderMock/>
// 		<ProfileMock/>
// 	</Fragment>
// , 
// document.getElementById('root'));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
document.getElementById('root'));