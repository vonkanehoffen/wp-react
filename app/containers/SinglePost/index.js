/*
 *
 * SinglePost
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Post from 'components/Post';
import { find } from 'lodash';
import { loadPosts } from '../../store/posts/actions';

export class SinglePost extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    const { posts, params, dispatch } = this.props;
    if(!find(posts, { 'slug': params.slug })) {
      dispatch(loadPosts({slug: params.slug}));
    }
  }
  render() {
    const { posts, params } = this.props;
    const post = find(posts, { 'slug': params.slug });

    return (
      <div>
        <Helmet
          title="SinglePost"
          meta={[
            { name: 'description', content: 'Description of SinglePost' },
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
