/**
*
* Post
*
*/

import React from 'react'
import { Link } from 'react-router'
import Button from 'components/Button'
import DateMeta from 'components/DateMeta'
import Tags from 'components/Tags'
import config from 'config'
import MoreIcon from 'material-ui/svg-icons/navigation/more-horiz'
import './style.scss'


class Post extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const post = this.props.post
    const { slug, title, content, excerpt, date } = this.props.post;
    const featuredMedia = _.get(post, ['_embedded', 'wp:featuredmedia', '0'], false)
    const tags = _.get(post, ['_embedded', 'wp:term', '1'], false) // 1 is always tags. 0 is category which we won't us yet.

    return (
      <article className="Post">
        <div className="container">
          <h2 dangerouslySetInnerHTML={{__html: title.rendered}} />
          <div className="body">
            <div className="meta">
              <DateMeta date={date} />
              {tags && <Tags terms={tags}/>}
            </div>
            <div className="content">
              <div dangerouslySetInnerHTML={{__html: excerpt.rendered}} />
              <Link to={'/blog/'+slug} title="Read More">
                <MoreIcon
                  color={config.primaryColor}
                  style={{width: '40px', height: '40px'}}/>
              </Link>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

Post.propTypes = {
  post: React.PropTypes.object.isRequired
};

export default Post;
