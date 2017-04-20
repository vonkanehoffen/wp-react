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

import u from 'updeep'
import { mergeAndSortPosts } from 'utils/store'
import {
  LOAD_POSTS,
  LOAD_POSTS_BY_TAG,
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
    _embed: true,
  },
};

function postsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_POSTS:
    case LOAD_POSTS_BY_TAG:
      return u({
        fetchArgs: action.args,
        loading: true,
        error: false,
      }, state)
    case LOAD_MORE_POSTS:
      return u({
        loading: true,
        fetchArgs: {
          page: state.fetchArgs.page + 1
        }
      }, state)
    case LOAD_POSTS_SUCCESS:
      return u({
        loading: false,
        posts: mergeAndSortPosts(state.posts, action.posts),
      }, state)
    case LOAD_POSTS_ERROR:
      return u({
        error: action.error,
        loading: false,
      }, state)

    // Comments
    case SAVE_COMMENT:
      return u({
        commentSaving: true,
        commentError: false,
      }, state)
    case SAVE_COMMENT_SUCCESS:
      // Get index of relevant post from returned comment and append
      const postIndex = _.findIndex(state.posts, post =>
        post.id === action.comment.post
      )
      return u({
        commentSaving: false,
        posts: { [postIndex]: { _embedded: { replies: { 0: (replies) =>
          replies ? [].concat(replies, [action.comment]) : [action.comment]
      }}}}}, state)
    case SAVE_COMMENT_ERROR:
      return u({
        error: action.error,
        commentSaving: false,
      }, state)
    default:
      return state;
  }
}

export default postsReducer;
