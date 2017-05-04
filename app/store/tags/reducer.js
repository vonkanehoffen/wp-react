/**
 * Tags reducer
 * Used to hold the list of tags for footer navigation
 */

import u from 'updeep'
import { LOAD_TAGS, LOAD_TAGS_ERROR, LOAD_TAGS_SUCCESS } from './constants';

// The initial state of the App
const initialState = {
  loading: false,
  error: false,
  tags: [],
}

function tagsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TAGS:
      return u({
        loading: true,
        error: false,
      }, state)
    case LOAD_TAGS_SUCCESS:
      return u({
        loading: false,
        tags: action.tags,
      }, state)
    case LOAD_TAGS_ERROR:
      return u({
        error: action.error,
        loading: false,
      }, state)
    default:
      return state;
  }
}

export default tagsReducer;
