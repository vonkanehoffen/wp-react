import { take, call, put, select, cancel, takeLatest, takeEvery } from 'redux-saga/effects'
import { LOAD_TAGS } from './constants'
import { tagsLoaded, tagLoadingError } from './actions'
import config from 'config'
import request from 'utils/request';

export function* getTags() {
  try {
    const tags = yield call(request, config.apiRoot + '/tags', { orderby: 'count', order: 'desc', per_page: '20' })
    yield put(tagsLoaded(tags));

  } catch (err) {
    yield put(tagLoadingError(err));
  }
}

export function* tagsData() {
  yield takeEvery(LOAD_TAGS, getTags)
}

export default [ tagsData ];
