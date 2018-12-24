import asyncTypes from 'utils/async_types';

const TYPES = {
	...asyncTypes('USER_SIGN_UP'),
	...asyncTypes('USER_SIGN_IN'),
	SIGN_OUT: 'SIGN_OUT',
}

export default TYPES;
