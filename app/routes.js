// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';
import postsData from 'store/posts/sagas'
import tagsData from 'store/tags/sagas'

import HomePage from 'containers/HomePage'
import SinglePost from 'containers/SinglePost'
import PostsByTag from 'containers/PostsByTag'
import Search from 'containers/Search'
import Contact from 'containers/Contact'
import NotFoundPage from 'containers/NotFoundPage'

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars
  injectSagas(postsData);
  injectSagas(tagsData)
  return [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    }, {
      path: '/blog/:slug',
      name: 'singlePost',
      component: SinglePost,
    }, {
      path: '/tag/:slug',
      name: 'postsByTag',
      component: PostsByTag,
    }, {
      path: '/search',
      name: 'search',
      component: Search,
    }, {
      path: '/contact',
      name: 'contact',
      component: Contact,
    }, {
      path: '*',
      name: 'notfound',
      component: NotFoundPage,
    },
  ];
}
