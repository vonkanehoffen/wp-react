/**
 * Posts Reducer Selectors
 */

import { createSelector } from 'reselect';

const selectPosts = (state) => state.get('global');

const makeSelectFetchArgs = () => createSelector(
  selectPosts,
  (postsState) => postsState.get('fetchArgs')
)

export {
  selectPosts,
  makeSelectFetchArgs
}
