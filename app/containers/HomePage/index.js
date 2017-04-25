/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';
import config from 'config'
import HomeSplash from 'components/HomeSplash'
import RecentPosts from 'containers/RecentPosts'

class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {

    return (
      <div className="HomePage">
        <Helmet
          title={`Home - ${config.blogTitle}`}
          meta={[
            { name: 'description', content: 'Kane Clover - Full Stack Developer' },
          ]}
        />
        <HomeSplash/>
        <RecentPosts/>
      </div>
    );
  }
}



// const mapStateToProps = createStructuredSelector({
//   posts: state.posts
// });


// Wrap the component to inject dispatch and state into it
export default HomePage

