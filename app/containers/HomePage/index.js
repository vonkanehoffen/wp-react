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
import messages from './messages';
import { loadPosts } from '../../store/posts/actions';
import Post from 'components/Post';

class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.onLoadPosts()
  }
  render() {
    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        {this.props.posts.map((post, i) => {
          return <Post post={post} key={i} />;
        })}
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onLoadPosts: () => dispatch(loadPosts()),
  };
}

// const mapStateToProps = createStructuredSelector({
//   posts: state.posts
// });
const mapStateToProps = (state) => {
  return {
    posts: state.getIn(['posts', 'posts'])
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

