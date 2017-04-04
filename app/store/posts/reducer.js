/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS, OrderedMap, Map } from 'immutable';

import {
  LOAD_POSTS,
  LOAD_MORE_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR,
  LOAD_FEATURED_MEDIA,
  LOAD_FEATURED_MEDIA_SUCCESS,
  LOAD_FEATURED_MEDIA_ERROR,
} from './constants';

// The initial state of the App
const initialState = Map({
  loading: false,
  error: false,
  posts: OrderedMap({}),
  fetchArgs: Map({page: 1}),
});

function postsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_POSTS:
      return state
        // .mergeIn(['fetchArgs'], action.args)
        .set('fetchArgs', Map(action.args))
        .set('loading', true)
        .set('error', false);
    case LOAD_MORE_POSTS:
      return state
        .set('loading', true)
        .updateIn(['fetchArgs', 'page'], (v = 1) => v + 1);
    case LOAD_POSTS_SUCCESS:
      let posts = {};
      action.posts.forEach(post => {
        posts[post.id] = post;
      });
      return state
        .set('loading', false)
        .set('posts', state.get('posts')
          .merge(OrderedMap(posts))
          .sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            if (dateA > dateB) { return -1; }
            if (dateA < dateB) { return 1; }
            if (dateA === dateB) { return 0; }
          })
        );
    case LOAD_POSTS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case LOAD_FEATURED_MEDIA:
    case LOAD_FEATURED_MEDIA_SUCCESS:
    case LOAD_FEATURED_MEDIA_ERROR:
      return state
        .setIn(['posts', action.postId, 'featuredMediaUrl'], 'stuff' ); // This just wipes out the whole existing post and doesn't update react component. FFS.
    default:
      return state;
  }
}

export default postsReducer;
