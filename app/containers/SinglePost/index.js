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
import ActionBar from 'containers/ActionBar';
import FeaturedMedia from 'components/FeaturedMedia';
import Tags from 'components/Tags';
import styled from 'styled-components';

export class SinglePost extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    // If we don't already have the post stored, load it
    const { post, params, dispatch } = this.props
    if(!post) {
      dispatch(loadPosts({slug: params.slug}))
    }
  }

  render() {
    const { post } = this.props;
    const title = post ? post.title.rendered : '';
    let featuredMedia, tags
    try {
      featuredMedia = post._embedded['wp:featuredmedia'][0]
    } catch(e) {
      featuredMedia = false
    }
    try {
      tags = post._embedded['wp:term'][1] // 1 is always tags. 0 is category which we won't us yet.
    } catch(e) {
      tags = false
    }

    const Spacer = styled.div`
      height: 60px;
    `;

    return (
      <div>
        <Helmet
          title={title+' - '+config.blogTitle}
          meta={[
            { name: 'description', content: title },
          ]}
        />
        {featuredMedia ?
          <FeaturedMedia media={featuredMedia} />
        :
          <Spacer />
        }
        {tags && <Tags terms={tags}/>}
        {post && <Post post={post}/>}
        <ActionBar />
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
