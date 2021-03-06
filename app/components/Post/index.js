/**
*
* Post
*
*/

import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import DateMeta from 'components/DateMeta'
import Tags from 'components/Tags'
import CommentCount from 'components/CommentCount'
import Comments from 'containers/Comments'
import './style.scss'
import lineMask from './line-diagonal-mask.png'
import Highlight from 'react-highlight'
import './codeHighlights.scss'

class Post extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)
    this.state = {
      expanded: _.get(this.props, 'expanded', false)
    }
  }

  toggleExpanded = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const { post, showFeaturedMedia } = this.props
    const { slug, content, excerpt, date } = post
    const featuredMedia = _.get(post, ['_embedded', 'wp:featuredmedia', '0'], false)
    const tags = _.get(post, ['_embedded', 'wp:term', '1'], false) // 1 is always tags. 0 is category which we won't us yet.

    const expanded = this.state.expanded

    const title =
      <h2>
        <Link to={'/blog/'+slug} dangerouslySetInnerHTML={{__html: post.title.rendered}} />
      </h2>

    return (
      <article className="Post">
        {featuredMedia && showFeaturedMedia ?
        <div
          className="featuredMedia"
          style={{backgroundImage: `url(${featuredMedia.media_details.sizes.large.source_url})`}}>
          <div className="overlay"></div>
          <div className="container">
            {title}
          </div>
        </div>
          :
        <div className="container">
          {title}
        </div>
        }
        <div className="container">
          <div className="body">
            <div className="meta">
              <DateMeta date={date} />
              {tags && <Tags terms={tags}/>}
              <CommentCount post={post}/>
            </div>
            <div className="content">
              {expanded ?
                <Highlight innerHTML={true}>
                  {content.rendered}
                </Highlight>
              :
                <div>
                  <div dangerouslySetInnerHTML={{__html: excerpt.rendered}}></div>
                  <Link to={'/blog/'+slug} title="Read More">
                    <i className="material-icons more">more_horiz</i>
                  </Link>
                </div>
              }
            </div>
          </div>
          {expanded && <Comments post={post} />}
        </div>
        <div className="divider" style={{backgroundImage: 'url('+lineMask+')' }}/>
      </article>
    );
  }
}

Post.propTypes = {
  post: React.PropTypes.object.isRequired,
  expanded: React.PropTypes.bool,
};

export default Post;
