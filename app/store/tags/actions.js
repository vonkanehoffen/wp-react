import { LOAD_TAGS, LOAD_TAGS_ERROR, LOAD_TAGS_SUCCESS } from './constants';

export const loadTags = (args = {}) => ({ type: LOAD_TAGS })
export const tagsLoaded = tags => ({ type: LOAD_TAGS_SUCCESS, tags })
export const tagLoadingError = error => ({ type: LOAD_TAGS_ERROR, error: error.message })
