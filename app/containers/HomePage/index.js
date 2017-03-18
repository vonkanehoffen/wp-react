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
import { loadPosts } from 'containers/App/actions';

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
        <pre>{JSON.stringify(this.props.posts, null, 2)}</pre>
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
    posts: state.get('global')
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

