/*
 *
 * SinglePost
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import config from 'config';
import Post from 'components/Post';
import { loadPosts } from '../../store/posts/actions';
import ActionBar from 'components/ActionBar';
import RecentPosts from 'containers/RecentPosts'

export class SinglePost extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    // If we don't already have the post stored, load it
    const { post, params, dispatch } = this.props
    if(!post) {
      dispatch(loadPosts({ slug: params.slug, search: false }))
    }
  }

  // TODO: Something wrong with logic here? http://localhost:3000/blog/setting-permissions-gitlab-ci-runner doesn't alwasys display

  render() {
    const { post, onReply } = this.props;
    const title = post ? post.title.rendered : '';
    const featuredMedia = _.get(post, ['_embedded', 'wp:featuredmedia', '0'], false)
    const tags = _.get(post, ['_embedded', 'wp:term', '1'], false) // 1 is always tags. 0 is category which we won't us yet.

    return (
      <div className="SinglePost">
        <Helmet
          title={title+' - '+config.blogTitle}
          meta={[
            { name: 'description', content: title },
          ]}
        />
        {post && <Post post={post} expanded={true} showFeaturedMedia={true} />}
        <ActionBar />
        <div className="container">
          <h3>Recent Posts</h3>
        </div>
        <RecentPosts/>
      </div>
    );
  }
}

SinglePost.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

// This should be a reselect selector thing....
function findPostBySlug(posts, slug) {
  for(let post in posts) {
    if(posts[post].slug === slug) return posts[post]
  }
  return false
}

const mapStateToProps = (state, props) => {
  const { posts } = state.posts
  return {
    post: findPostBySlug(posts, props.params.slug)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
