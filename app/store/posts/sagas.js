/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, cancel, takeLatest, takeEvery } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_POSTS, LOAD_MORE_POSTS, LOAD_FEATURED_MEDIA } from './constants';
import { postsLoaded, postLoadingError } from './actions';
import { makeSelectFetchArgs } from './selectors';

// Import paths: https://intellij-support.jetbrains.com/hc/en-us/community/posts/207656825-Custom-import-paths-with-es6
import request from '../../utils/request';
// import { makeSelectUsername } from 'containers/HomePage/selectors';

/**
 * Posts request/response handler
 */
export function* getPosts() {
  // Select args from store
  const args = yield select(makeSelectFetchArgs());
  const requestURL = `http://kanec.co.uk/wp-json/wp/v2/posts`;

  try {
    // Call our request helper (see 'utils/request')
    const posts = yield call(request, requestURL, args);
    yield put(postsLoaded(posts)); // TODO: Check an array comes back
  } catch (err) {
    yield put(postLoadingError(err));
  }
}

/**
 * Get featured images
 */
export function* getFeaturedMedia(action) {
  console.log(action)
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

export function* featuredMediaSaga() {
  yield takeEvery(LOAD_FEATURED_MEDIA, getFeaturedMedia)
}

// Bootstrap sagas
export default [ postsData, featuredMediaSaga ];
