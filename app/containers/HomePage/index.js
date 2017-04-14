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
import messages from './messages';
import { loadPosts, loadMorePosts } from '../../store/posts/actions';
import LoadMoreButton from 'components/LoadMoreButton';
import HomeSplash from 'components/HomeSplash';
import Post from 'components/Post';
import ActionBar from 'containers/ActionBar';

class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.onLoadPosts()
  }
  render() {
    const { posts, onLoadMore } = this.props;
    return (
      <div>
        <Helmet
          title={`Home - ${config.blogTitle}`}
          meta={[
            { name: 'description', content: 'Kane Clover - Full Stack Developer' },
          ]}
        />
        <HomeSplash/>
        {posts.map((post, i) => {
          return <Post post={post} key={i} />;
        })}
        <ActionBar>
          <LoadMoreButton onClick={onLoadMore} />
        </ActionBar>
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onLoadPosts: () => dispatch(loadPosts({ slug: false })),
    onLoadMore: () => dispatch(loadMorePosts()),
  };
}

// const mapStateToProps = createStructuredSelector({
//   posts: state.posts
// });
const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

