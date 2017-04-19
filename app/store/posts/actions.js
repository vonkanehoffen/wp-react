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
  SAVE_COMMENT,
  SAVE_COMMENT_SUCCESS,
  SAVE_COMMENT_ERROR,
} from './constants';

/**
 * Load posts - this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_POSTS
 */
export const loadPosts = (args = {}) => ({ type: LOAD_POSTS, args })

export const loadMorePosts = () => ({ type: LOAD_MORE_POSTS })

/**
 * Dispatched when the posts are loaded by the request saga
 *
 * @param  {array} posts The repository data
 *
 * @return {object}      An action object with a type of LOAD_POSTS_SUCCESS passing the repos
 */
export const postsLoaded = posts => ({ type: LOAD_POSTS_SUCCESS, posts })

/**
 * Dispatched when loading the posts fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_POSTS_ERROR passing the error
 */
export const postLoadingError = error => ({ type: LOAD_POSTS_ERROR, error: error.message })


// Comments

export const saveComment = args => ({ type: SAVE_COMMENT, args })
export const commentSaved = comment => ({ type: SAVE_COMMENT_SUCCESS, comment})
export const commentSavingError = error => ({ type: SAVE_COMMENT_ERROR, error: error.message })

