/**
 *
 * Comment Count
 *
 */

import React from 'react';
import CommentIcon from 'material-ui/svg-icons/communication/comment'
import config from 'config'
import './style.scss'

function CommentCount({post}) {
  const replies = _.get(post, ['_embedded', 'replies', 0], false)
  let message;
  if(replies) {
    message = `${replies.length} comment${replies.length !== 1 && 's'}`
  } else {
    message = 'No comments'
  }

  return (
    <div className="CommentCount">
      <CommentIcon color={config.primaryColor} style={{marginRight: '10px'}} />
      {message}
    </div>
  );
}

CommentCount.propTypes = {

};


export default CommentCount;
