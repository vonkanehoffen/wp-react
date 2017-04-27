/**
*
* Comments
*
*/

import React from 'react';
import CommentForm from './CommentForm';
import { sortByDate } from 'utils/store'
import { formattedDate } from 'utils/display'
import './style.scss'

class Comments extends React.Component { // eslint-disable-line react/prefer-stateless-function

  printComments(rootComment, comments) {
    const childComments = comments.filter(c => c.parent === rootComment.id)
    return (
      <div key={rootComment.id} className="comment">
        {rootComment.status && <div>Status: {rootComment.status}</div>}
        <div className="commentMeta">
          <img src={rootComment.author_avatar_urls['48']} alt="" />
          <div className="author">{rootComment.author_name} </div>
          <div className="date">{formattedDate(rootComment.date)}</div>
        </div>
        <div className="content" dangerouslySetInnerHTML={{__html: rootComment.content.rendered}} />
        <CommentForm postId={this.props.post.id} parentId={rootComment.id} />
        {childComments.map(c => this.printComments(c, comments))}
      </div>
    )
  }

  render() {
    const { post } = this.props
    const comments =_.get(post, ['_embedded', 'replies'], false)
    return (
      <div className="Comments">
        <h3>Comments</h3>
        {comments && sortByDate(comments[0], 'ASC')
          .filter(comment =>
            comment.parent === 0
          )
          .map(rootComment =>
            this.printComments(rootComment, comments[0])
        )}
        <CommentForm postId={this.props.post.id} parentId={0} />
      </div>
    );
  }
}

Comments.propTypes = {
  post: React.PropTypes.object,
};

export default Comments;
