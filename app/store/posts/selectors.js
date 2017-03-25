/**
 * Posts Reducer Selectors
 */

import { createSelector } from 'reselect';

const selectPosts = (state) => state;

const makeSelectFetchArgs = () => createSelector(
  selectPosts,
  (postsState) => postsState.getIn(['posts', 'fetchArgs']).toJS()
);

export {
  selectPosts,
  makeSelectFetchArgs
}
