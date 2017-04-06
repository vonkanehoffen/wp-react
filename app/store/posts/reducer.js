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

import { cloneDeep } from 'lodash'
import { mergeAndSortPosts } from 'utils/store'
import {
  LOAD_POSTS,
  LOAD_MORE_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR,
  LOAD_FEATURED_MEDIA,
  LOAD_FEATURED_MEDIA_SUCCESS,
  LOAD_FEATURED_MEDIA_ERROR,
} from './constants';

// The initial state of the App
const initialState = {
  loading: false,
  error: false,
  posts: [],
  fetchArgs: {
    page: 1
  },
};

function postsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_POSTS:
      return Object.assign({}, state, {
        fetchArgs: Object.assign({}, state.fetchArgs, action.args),
        // fetchArgs: action.args,
        loading: true,
        error: false,
      })
    case LOAD_MORE_POSTS:
      return Object.assign({}, state, {
        loading: true,
        fetchArgs: {
          page: state.fetchArgs.page + 1 // TODO: this removes any other object prop
        }
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
    case LOAD_FEATURED_MEDIA:
    case LOAD_FEATURED_MEDIA_SUCCESS:
    case LOAD_FEATURED_MEDIA_ERROR:
      // return Object.assign({}, state, )
      //   .setIn(['posts', action.postId, 'featuredMediaUrl'], 'stuff' ); // This just wipes out the whole existing post and doesn't update react component. FFS.
    default:
      return state;
  }
}

export default postsReducer;
