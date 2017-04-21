/**
*
* Comments
*
*/

import React from 'react';
import CommentForm from './CommentForm';

class Comments extends React.Component { // eslint-disable-line react/prefer-stateless-function

  printComments(rootComment, comments) {
    const childComments = comments.filter(c => c.parent === rootComment.id)
    return (
      <div key={rootComment.id} style={{marginLeft: '10px'}}>
        <div>Status: {rootComment.status}</div>
        <div style={{background: '#faa'}} dangerouslySetInnerHTML={{__html: rootComment.content.rendered}} />
        <div>
          By <img src={rootComment.author_avatar_urls['48']} alt="" /><b>{rootComment.author_name} </b>
          on <b>{rootComment.date_gmt}</b>
        </div>
        <CommentForm postId={this.props.post.id} parentId={rootComment.id} />
        {childComments.map(c => this.printComments(c, comments))}
      </div>
    )
  }

  render() {
    const { post } = this.props
    const comments =_.get(post, ['_embedded', 'replies'], false)
    return (
      <div>
        {comments && comments[0]
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
