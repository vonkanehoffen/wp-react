/**
*
* LoadMoreButton
*
*/

import React from 'react';
import { connect } from 'react-redux';
import { RaisedButton } from 'material-ui'


class LoadMoreButton extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { onClick, loading } = this.props
    return (
      <RaisedButton onClick={onClick} disabled={loading} label="Load More" />
    );
  }
}

LoadMoreButton.propTypes = {
  onClick: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    loading: state.posts.loading
  }
}

export default connect(mapStateToProps)(LoadMoreButton)
