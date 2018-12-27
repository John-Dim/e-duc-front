import asyncTypes from 'utils/async_types';

const TYPES = {
	...asyncTypes('USER_SIGN_UP'),
	...asyncTypes('USER_SIGN_IN'),
	USER_SIGN_OUT: 'USER_SIGN_OUT',
}

export default TYPES;
