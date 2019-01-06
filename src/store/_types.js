import asyncTypes from 'utils/async_types'

export const USER_TYPES = {
  ...asyncTypes('GET_USER'),
  USER_SIGN_OUT: 'USER_SIGN_OUT'
}

export const POSTS_TYPES = {
  ...asyncTypes('CREATE_POST'),
  ...asyncTypes('GET_POSTS')
}

