/*
 *
 * ActionBar
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { loadMorePosts } from '../../store/posts/actions';
import Error from 'components/Error'

export class ActionBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {

    const { onLoadMore, loading, error, children } = this.props;

    const Bar = styled.nav`
      padding: 15px 0;
    `;

    return (
      <Bar>
        <div className="container">
          {loading ?
            <div>Loading....</div>
            :
            children
          }
          {error && <Error message={error} /> }
        </div>
      </Bar>
    );
  }
}

ActionBar.propTypes = {

};


function mapDispatchToProps(dispatch) {
  return {

  };
}

const mapStateToProps = (state) => {
  return {
    loading: state.posts.loading,
    error: state.posts.error,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionBar);
