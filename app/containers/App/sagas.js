/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_POSTS } from './constants';
import { postsLoaded, postLoadingError } from './actions';
import { makeSelectFetchArgs } from './postSelectors';

// Import paths: https://intellij-support.jetbrains.com/hc/en-us/community/posts/207656825-Custom-import-paths-with-es6
import request from 'utils/request';
// import { makeSelectUsername } from 'containers/HomePage/selectors';

/**
 * Github repos request/response handler
 */
export function* getPosts() {
  // Select args from store
  const args = yield select(makeSelectFetchArgs());
  const requestURL = `http://kanec.co.uk/wp-json/wp/v2/posts`;

  try {
    // Call our request helper (see 'utils/request')
    const posts = yield call(request, requestURL, args);
    yield put(postsLoaded(posts));
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
  const watcher = yield takeLatest(LOAD_POSTS, getPosts);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [ postsData ];
