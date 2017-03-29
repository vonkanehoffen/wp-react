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
import { find } from 'lodash';
import { loadPosts } from '../../store/posts/actions';

export class SinglePost extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    const { posts, params, dispatch } = this.props;
    if(!posts.find(post => post.slug === params.slug)) {
      dispatch(loadPosts({slug: params.slug}));
    }
  }
  render() {
    const { posts, params } = this.props;
    const post = posts.find(post => post.slug === params.slug);

    return (
      <div>
        <Helmet
          title={post.title.rendered+' - '+config.blogTitle}
          meta={[
            { name: 'description', content: post.title.rendered },
          ]}
        />
        <h1>SinglePost: {params.slug}</h1>
        {post ? <Post post={post}/> : <div>No post</div>}
      </div>
    );
  }
}

SinglePost.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    posts: state.getIn(['posts', 'posts'])
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
