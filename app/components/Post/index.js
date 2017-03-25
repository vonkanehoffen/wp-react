/**
*
* Post
*
*/

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

class Post extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {

    const Article = styled.article`
      background: #f9f;
    `;

    const { slug, title, content, excerpt } = this.props.post.toJS();
    return (
      <Article>
        <h4 dangerouslySetInnerHTML={{__html: title.rendered}} />
        <div dangerouslySetInnerHTML={{__html: excerpt.rendered}} />
        <Link to={'/blog/'+slug}>Read More</Link>
      </Article>
    );
  }
}

Post.propTypes = {
  post: React.PropTypes.object.isRequired
};

export default Post;
