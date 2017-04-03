/**
*
* LoadMoreButton
*
*/

import React from 'react';
import styled from 'styled-components';


class LoadMoreButton extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const Button = styled.button`
      border: 1px solid #f00;
    `;
    return (
      <Button onClick={this.props.onClick}>Load More</Button>
    );
  }
}

LoadMoreButton.propTypes = {
  onClick: React.PropTypes.func.isRequired
};

export default LoadMoreButton;
