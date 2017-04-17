/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_POSTS,
  LOAD_MORE_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR,
  LOAD_SEARCH,
} from './constants';

/**
 * Load posts - this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_POSTS
 */
export function loadPosts(args = {}) {
  return {
    type: LOAD_POSTS,
    args,
  }
}

export function loadMorePosts() {
  return {
    type: LOAD_MORE_POSTS,
  }
}

export function loadSearch(search) {
  return {
    type: LOAD_SEARCH,
    search,
  }
}

/**
 * Dispatched when the posts are loaded by the request saga
 *
 * @param  {array} posts The repository data
 *
 * @return {object}      An action object with a type of LOAD_POSTS_SUCCESS passing the repos
 */
export function postsLoaded(posts) {
  return {
    type: LOAD_POSTS_SUCCESS,
    posts,
  };
}

/**
 * Dispatched when loading the posts fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_POSTS_ERROR passing the error
 */
export function postLoadingError(error) {
  return {
    type: LOAD_POSTS_ERROR,
    error: error.message,
  };
}
