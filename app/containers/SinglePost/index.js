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
import ActionBar from 'containers/ActionBar';

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
    const title = post ? post.title.rendered : '';

    return (
      <div>
        <Helmet
          title={title+' - '+config.blogTitle}
          meta={[
            { name: 'description', content: title },
          ]}
        />
        <h1>SinglePost: {params.slug}</h1>
        {post && <Post post={post}/>}
        <ActionBar single={true} />
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
