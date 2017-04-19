/**
*
* Comments
*
*/

import React from 'react';
import CommentForm from './CommentForm';
// import styled from 'styled-components';

class Comments extends React.Component { // eslint-disable-line react/prefer-stateless-function

  printComments(rootComment, comments) {
    const childComments = comments.filter(c => c.parent === rootComment.id)
    return (
      <div key={rootComment.id} style={{marginLeft: '10px'}}>
        parent: {rootComment.parent},
        id: {rootComment.id},
        <div style={{background: '#faa'}} dangerouslySetInnerHTML={{__html: rootComment.content.rendered}} />
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
      </div>
    );
  }
}

Comments.propTypes = {
  post: React.PropTypes.object,
};

export default Comments;
