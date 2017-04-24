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
import FeaturedMedia from 'components/FeaturedMedia';
import Comments from 'containers/Comments';
import config from 'config'
import MoreIcon from 'material-ui/svg-icons/navigation/more-horiz'
import './style.scss'
import lineMask from './line-diagonal-mask.png'


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
    const post = this.props.post
    const { slug, title, content, excerpt, date } = post;
    const featuredMedia = _.get(post, ['_embedded', 'wp:featuredmedia', '0'], false)
    const tags = _.get(post, ['_embedded', 'wp:term', '1'], false) // 1 is always tags. 0 is category which we won't us yet.

    const expanded = this.state.expanded

    return (
      <article className="Post">
        {featuredMedia && <FeaturedMedia media={featuredMedia} />}
        <div className="container">
          <h2>
            <Link to={'/blog/'+slug} title="Read More">
              <div dangerouslySetInnerHTML={{__html: title.rendered}}></div>
            </Link>
          </h2>
          <div className="body">
            <div className="meta">
              <DateMeta date={date} />
              {tags && <Tags terms={tags}/>}
            </div>
            <div className="content">
              {expanded ?
                <div>
                  <div dangerouslySetInnerHTML={{__html: content.rendered}}></div>
                  <Comments post={post} />
                </div>
              :
                <div>
                  <div dangerouslySetInnerHTML={{__html: excerpt.rendered}}></div>
                  <MoreIcon
                    color={config.primaryColor}
                    style={{width: '40px', height: '40px'}}
                    onClick={this.toggleExpanded}
                  />
                </div>
              }

            </div>
          </div>
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
