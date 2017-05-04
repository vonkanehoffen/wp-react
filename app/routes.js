// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';
import postsData from 'store/posts/sagas'
import tagsData from 'store/tags/sagas'

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
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/blog/:slug',
      name: 'singlePost',
      getComponent(location, cb) {
        import('containers/SinglePost')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/tag/:slug',
      name: 'postsByTag',
      getComponent(location, cb) {
        import('containers/PostsByTag')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/search',
      name: 'search',
      getComponent(location, cb) {
        import('containers/Search')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/contact',
      name: 'contact',
      getComponent(location, cb) {
        import('containers/Contact')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
