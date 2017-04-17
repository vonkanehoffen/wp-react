/*
 *
 * PostsByTag
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { loadPosts, loadMorePosts } from '../../store/posts/actions';
import Post from 'components/Post';
import ActionBar from 'containers/ActionBar'
import LoadMoreButton from 'components/LoadMoreButton'

export class PostsByTag extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.onLoadPosts(this.props.params.slug)
  }
  render() {

    const { posts, onLoadMore, params } = this.props

    return (
      <div>
        <Helmet
          title="PostsByTag"
          meta={[
            { name: 'description', content: 'Description of PostsByTag' },
          ]}
        />
        <h2>Posts by tag: {params.slug}</h2>
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

function mapDispatchToProps(dispatch) {
  return {
    onLoadPosts: (tagSlug) => dispatch(loadPosts({ tagSlug })),
    onLoadMore: () => dispatch(loadMorePosts()),
  };
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsByTag);
