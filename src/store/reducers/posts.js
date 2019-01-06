import { POSTS_TYPES } from 'store/_types';

const initialState = []

const postsReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case POSTS_TYPES.CREATE_POST.SUCCESS:
      return [...state, payload.post];
    case POSTS_TYPES.GET_POSTS.SUCCESS:
      return payload.posts;
    default:
      return state;
  }
}

export default postsReducer;