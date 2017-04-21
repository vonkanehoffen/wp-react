/**
*
* Post
*
*/

import React from 'react';
import { Link } from 'react-router';
import Button from 'components/Button'
import './style.scss'


class Post extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { slug, title, content, excerpt, date } = this.props.post;
    return (
      <article className="article">
        <div className="container">
          <h2 dangerouslySetInnerHTML={{__html: title.rendered}} />
          <pre>{date}</pre>
          <div dangerouslySetInnerHTML={{__html: excerpt.rendered}} />
          <Link to={'/blog/'+slug}><Button label="Read More" /></Link>
        </div>
      </article>
    );
  }
}

Post.propTypes = {
  post: React.PropTypes.object.isRequired
};

export default Post;
