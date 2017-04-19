/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { mergeAndSortPosts } from 'utils/store'
import {
  LOAD_POSTS,
  LOAD_MORE_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR,
  SAVE_COMMENT,
  SAVE_COMMENT_SUCCESS,
  SAVE_COMMENT_ERROR,
} from './constants';

// The initial state of the App
const initialState = {
  loading: false,
  error: false,
  commentSaving: false,
  commentError: false,
  posts: [],
  fetchArgs: {
    page: 1,
    search: '',
  },
};

function postsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_POSTS:
      return Object.assign({}, state, {
        fetchArgs: Object.assign({}, state.fetchArgs, action.args),
        loading: true,
        error: false,
      })
    case LOAD_MORE_POSTS:
      return Object.assign({}, state, {
        loading: true,
        fetchArgs: Object.assign({}, state.fetchArgs, {
          page: state.fetchArgs.page + 1
        })
      })
    case LOAD_POSTS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        posts: mergeAndSortPosts(state.posts, action.posts),
      })
    case LOAD_POSTS_ERROR:
      return Object.assign({}, state, {
        error: action.error,
        loading: false,
      })

    // Comments
    case SAVE_COMMENT:
      return Object.assign({}, state, {
        commentSaving: true,
        commentError: false,
      })
    case SAVE_COMMENT_SUCCESS:
      debugger
      return Object.assign({}, state, {
        commentSaving: false,
// insert comment ere
      })
    case SAVE_COMMENT_ERROR:
      return Object.assign({}, state, {
        error: action.error,
        commentSaving: false,
      })
    default:
      return state;
  }
}

export default postsReducer;
