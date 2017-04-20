/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, cancel, takeLatest, takeEvery } from 'redux-saga/effects';
import u from 'updeep'
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_POSTS, LOAD_POSTS_BY_TAG, LOAD_MORE_POSTS, SAVE_COMMENT } from './constants';
import { postsLoaded, postLoadingError, commentSaved, commentSavingError } from './actions';
import { makeSelectFetchArgs } from './selectors';
import config from 'config'
import request from 'utils/request';

/**
 * Posts request/response handler
 */
export function* getPosts() {
  // Select args from store
  const args = yield select(makeSelectFetchArgs());

  try {
    // TODO: Could slim down API responses with https://wordpress.org/plugins/rest-api-filter-fields/ maybe?
    const posts = yield call(request, config.apiRoot + '/posts', args);
    yield put(postsLoaded(posts)); // TODO: Check an array comes back

  } catch (err) {
    yield put(postLoadingError(err));
  }
}

export function* getPostsByTag() {
  // To get posts by tag slug, we need to:
  // 1. Query for the ID of the tag
  // 2. Query for posts using that ID
  // See https://github.com/WP-API/WP-API/issues/2949

  const fetchArgs = yield select(makeSelectFetchArgs());
  try{
    const tags = yield call(request, config.apiRoot + '/tags', { slug: fetchArgs.tagSlug })

    const args = u({
      tags: tags[0].id,
      tagSlug: false,
    }, fetchArgs)

    const posts = yield call(request, config.apiRoot + '/posts', args);
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
  yield takeLatest([LOAD_POSTS, LOAD_MORE_POSTS], getPosts);
  yield takeLatest(LOAD_POSTS_BY_TAG, getPostsByTag)

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
