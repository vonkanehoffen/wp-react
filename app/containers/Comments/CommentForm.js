/**
 * Comment Form
 */

import React from 'react'
import { connect } from 'react-redux'
import TextField from 'components/TextField'
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
    // TODO: Sort duplicated IDs - doesn't work with `name` attr for some reason
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
            <h4>Leave a comment:</h4>
            <div className="flex-row">
              <div className="col">
                <TextField id="author_name" value={this.state.author_name} onChange={this.handleChange} placeholder="Your Name"/>
              </div>
              <div className="col">
                <TextField id="author_email" value={this.state.author_email} onChange={this.handleChange} placeholder="Email" type="email"/>
              </div>
            </div>
            <div className="flex-row">
                <TextField id="content" value={this.state.content} onChange={this.handleChange} placeholder="Comment" multiLine={true}/>
            </div>
            <div className="flex-row">
              <Button onClick={this.handleSubmit} label="Post" primary={true}/>
              <Button onClick={this.closeForm} label="Cancel" />
            </div>
          </form>
          :
          <Button onClick={this.openForm} label={parentId > 0 ? 'Reply' : 'Leave a comment'} icon="comment" primary={true}/>
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