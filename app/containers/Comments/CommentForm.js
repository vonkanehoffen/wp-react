/**
 * Comment Form
 */

import React from 'react';
import { connect } from 'react-redux';
import { TextField } from 'material-ui'
import Button from 'components/Button'
import { saveComment } from 'store/posts/actions'

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      author_name: '',
      author_email: '',
      content: '',
      formOpen: false,
    }
  }

  openForm = () => {
    this.setState({ formOpen: true })
  }

  closeForm = () => {
    this.setState({ formOpen: false })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = () => {
    const { postId, parentId, dispatch } = this.props
    const { author_name, author_email, content } = this.state
    dispatch(saveComment({
      // Args for Wordpress API call:
      post: postId,
      parent: parentId,
      author_name,
      author_email,
      content: content,
    }))
  }

  render () {
    const { postId, parentId } = this.props
    return (
      <div className="CommentForm">
        {this.state.formOpen ?
          <form onSubmit={this.handleSubmit}>
            <p>Leave a comment:</p>
            <TextField id="author_name" value={this.state.author_name} onChange={this.handleChange}
                       floatingLabelText="Your Name"/>
            <TextField id="author_email" value={this.state.author_email} onChange={this.handleChange}
                       floatingLabelText="Email" type="email"/>
            <TextField id="content" value={this.state.content} onChange={this.handleChange} floatingLabelText="Comment"
                       multiLine={true}/>
            <Button onClick={this.handleSubmit} label="Post" primary={true}/>
            <Button onClick={this.closeForm} label="Cancel" />
          </form>
          :
          <Button onClick={this.openForm} label={parentId > 0 ? 'Reply' : 'Leave a comment'} primary={true}/>
        }
      </div>
    )
  }
}

CommentForm.PropTypes = {
  postId: React.PropTypes.number.isRequired,
  parentId: React.PropTypes.number.isRequired,
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(CommentForm);