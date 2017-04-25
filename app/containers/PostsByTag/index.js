/*
 *
 * PostsByTag
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { loadPostsByTag, loadMorePosts } from '../../store/posts/actions';
import Post from 'components/Post';
import ActionBar from 'components/ActionBar'
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
          return <Post post={post} expanded={false} key={i} />;
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
    onLoadPosts: (tagSlug) => dispatch(loadPostsByTag({ tagSlug, search: false, slug: false })),
    onLoadMore: () => dispatch(loadMorePosts()),
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: filterPostsByTagSlug(state.posts.posts, ownProps.params.slug),
  }
}

function filterPostsByTagSlug(posts, slug) {
  return posts.filter(post => {
    const terms = _.get(post, ['_embedded', 'wp:term'], false)
    if(!terms) return false
    return _.flattenDeep(terms).find(term => term.slug === slug)
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsByTag);
