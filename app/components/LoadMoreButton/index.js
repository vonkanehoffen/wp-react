/**
*
* LoadMoreButton
*
*/

import React from 'react';
import { connect } from 'react-redux';
import Button from 'components/Button'


class LoadMoreButton extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { onClick, loading } = this.props
    return (
      <Button onClick={onClick} disabled={loading} label="Load More" />
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
