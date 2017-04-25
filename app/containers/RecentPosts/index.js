/**
 * Recent Posts
 */

import React from 'react';
import { connect } from 'react-redux';
import config from 'config'
import { loadPosts, loadMorePosts } from '../../store/posts/actions';
import LoadMoreButton from 'components/LoadMoreButton';
import Post from 'components/Post';
import ActionBar from 'components/ActionBar';

class RecentPosts extends React.Component {
  componentDidMount() {
    this.props.onLoadPosts()
  }

  render() {
    const { posts, onLoadMore } = this.props
    return (
      <div className="RecentPosts">
        {posts.map((post, i) => {
          return <Post post={post} expanded={false} key={i} />;
        })}
        <ActionBar>
          <LoadMoreButton onClick={onLoadMore} />
        </ActionBar>
      </div>
    )
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onLoadPosts: () => dispatch(loadPosts({ slug: false, search: false, page: 1 })),
    onLoadMore: () => dispatch(loadMorePosts()),
  };
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecentPosts)
