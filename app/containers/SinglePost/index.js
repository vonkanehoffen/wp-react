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
import styled from 'styled-components';

export class SinglePost extends React.Component { // eslint-disable-line react/prefer-stateless-function

  findPostBySlug(slug) {
    const posts = this.props.posts
    for(let post in posts) {
      if(posts[post].slug === slug) return posts[post]
    }
  }

  // If we don't already have the post stored, load it

  componentDidMount() {
    const { params, dispatch } = this.props
    if(!this.findPostBySlug(params.slug)) {
      dispatch(loadPosts({slug: params.slug}))
    }
  }

  render() {
    const { posts, params } = this.props;
    const post = this.findPostBySlug(params.slug);
    const title = post ? post.title.rendered : '';
    const featuredMedia = post ? post.featured_media : 0;

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
        {post && post.featured_media > 0 ?
          <FeaturedMedia post={post} />
        :
          <Spacer />
        }
        {post && <Post post={post}/>}
        <ActionBar />
      </div>
    );
  }
}

SinglePost.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
