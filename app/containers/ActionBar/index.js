/*
 *
 * ActionBar
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { loadMorePosts } from '../../store/posts/actions';
import LoadMoreButton from 'components/LoadMoreButton';

export class ActionBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {

    const { onLoadMore, loading, single } = this.props;

    const Bar = styled.nav`
      padding: 15px 0;
    `;

    return (
      <Bar>
        <div className="container">
          {loading ?
            <div>Loading....</div>
            :
            <div>
              {single ?
                <div>Single stuff here</div>
                :
                <LoadMoreButton onClick={onLoadMore}/>
              }
            </div>
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
    onLoadMore: () => dispatch(loadMorePosts()),
  };
}

const mapStateToProps = (state) => {
  return {
    loading: state.getIn(['posts', 'loading'])
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionBar);
