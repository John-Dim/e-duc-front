import asyncTypes from 'utils/async_types';

const TYPES = {
	...asyncTypes('CREATE_GROUP'),
	...asyncTypes('EDIT_GROUP'),
	...asyncTypes('GET_GROUP'),
	...asyncTypes('FOLLOW_GROUP')
}

export default TYPES;
