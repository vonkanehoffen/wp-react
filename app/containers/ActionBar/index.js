/*
 *
 * ActionBar
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { loadMorePosts } from '../../store/posts/actions';

export class ActionBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {

    const { onLoadMore, loading, children } = this.props;

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
    loading: state.posts.loading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionBar);
