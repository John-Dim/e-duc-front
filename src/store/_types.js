import asyncTypes from 'utils/async_types'

export const USER_TYPES = {
  ...asyncTypes('GET_USER'),
  USER_SIGN_OUT: 'USER_SIGN_OUT'
}

export const POSTS_TYPES = {
  ...asyncTypes('CREATE_POST'),
  ...asyncTypes('GET_POSTS')
}

export const ADMIN_TYPES = {
  ...asyncTypes('GET_USERS'),
  ...asyncTypes('GET_GROUPS')
}

export const PROFILE_TYPES = {
  ...asyncTypes('USER_EDIT'),
  ...asyncTypes('GET_PROFILE'),
  ...asyncTypes('CREATE_PROFILE_POSTS'),
}

export const AUTH_TYPES = {
	...asyncTypes('USER_SIGN_UP'),
	...asyncTypes('USER_SIGN_IN'),
	USER_SIGN_OUT: 'USER_SIGN_OUT',
}
