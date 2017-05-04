/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import postsReducer from 'store/posts/reducer';
import tagsReducer from 'store/tags/reducer'
import languageProviderReducer from 'containers/LanguageProvider/reducer';


/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  return combineReducers({
    routing: routerReducer,
    posts: postsReducer,
    tags: tagsReducer,
    language: languageProviderReducer,
    ...asyncReducers,
  });
}
