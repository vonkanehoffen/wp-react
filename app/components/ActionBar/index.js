/*
 *
 * ActionBar
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';

export class ActionBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const Bar = styled.nav`
      padding: 15px 0;
    `

    return (
      <Bar>
        <div className="container">
          {this.props.children}
        </div>
      </Bar>
    )
  }
}

ActionBar.propTypes = {

};


export default ActionBar;
