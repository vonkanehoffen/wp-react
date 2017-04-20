/**
*
* Post
*
*/

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
// import { RaisedButton } from 'material-ui'
import Button from 'components/Button'

class Post extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {

    const Article = styled.article`
      margin-bottom: 20px;
      h2 {
        font-size: 40px;
      }
    `;

    const { slug, title, content, excerpt, date } = this.props.post;
    return (
      <Article>
        <div className="container">
          <h2 dangerouslySetInnerHTML={{__html: title.rendered}} />
          <pre>{date}</pre>
          <div dangerouslySetInnerHTML={{__html: excerpt.rendered}} />
          <Link to={'/blog/'+slug}><Button label="Read More" /></Link>
        </div>
      </Article>
    );
  }
}

Post.propTypes = {
  post: React.PropTypes.object.isRequired
};

export default Post;
