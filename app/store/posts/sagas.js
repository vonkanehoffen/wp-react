/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, cancel, takeLatest, takeEvery } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_POSTS, LOAD_MORE_POSTS, SAVE_COMMENT } from './constants';
import { postsLoaded, postLoadingError, commentSaved, commentSavingError } from './actions';
import { makeSelectFetchArgs } from './selectors';
import config from 'config'

// Import paths: https://intellij-support.jetbrains.com/hc/en-us/community/posts/207656825-Custom-import-paths-with-es6
import request from '../../utils/request';
// import { makeSelectUsername } from 'containers/HomePage/selectors';

/**
 * Posts request/response handler
 */
export function* getPosts() {
  // Select args from store
  const args = yield select(makeSelectFetchArgs());

  // If we're getting posts by tag, get the ID so we can query the API
  // See https://github.com/WP-API/WP-API/issues/2949
  if(args.hasOwnProperty('tagSlug') && args['tagSlug'].length > 0) {
    try{
      const tags = yield call(request, config.apiRoot + '/tags', { slug: args.tagSlug })
      args['tags'] = tags[0].id
      args['tagSlug'] = false
    } catch (err) {
      yield put(postLoadingError(err));
    }
  }

  const requestURL = config.apiRoot + '/posts';

  try {
    // TODO: Could slim down API responses with https://wordpress.org/plugins/rest-api-filter-fields/ maybe?
    // Call our request helper (see 'utils/request')
    const posts = yield call(request, requestURL, args);
    yield put(postsLoaded(posts)); // TODO: Check an array comes back
  } catch (err) {
    yield put(postLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* postsData() {
  // Watches for LOAD_POSTS actions and calls getPosts when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  yield takeLatest([LOAD_POSTS, LOAD_MORE_POSTS], getPosts);
  // Suspend execution until location changes
  // yield take(LOCATION_CHANGE);
  // yield cancel(watcher);
}

/**
 * Comments
 */

export function* saveCommentData(action) {
  try {
    const comment = yield call(
      request,
      config.apiRoot + '/comments',
      action.args,
      { method: 'POST' }
    )
    // TODO: check for comment errors here
    yield put(commentSaved(comment))
  } catch(err) {
    yield put(commentSavingError(err))
  }
}

export function* commentData() {
  yield takeLatest([SAVE_COMMENT], saveCommentData)
}

// Bootstrap sagas
export default [ postsData, commentData ];
