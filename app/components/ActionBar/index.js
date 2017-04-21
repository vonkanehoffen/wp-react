/*
 *
 * ActionBar
 *
 */

import React, { PropTypes } from 'react';
import './style.scss'

export class ActionBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <nav className="ActionBar">
        <div className="container">
          {this.props.children}
        </div>
      </nav>
    )
  }
}

ActionBar.propTypes = {

};


export default ActionBar;
