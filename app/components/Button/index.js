/**
*
* Button
*
*/

import React from 'react';
import config from 'config'
import './style.scss'

function Button({ label, primary, onClick, disabled }) {
  const classes = 'Button' +
    (primary ? ' primary' : '') +
    (disabled ? ' disabled' : '')
  return (
    <div className={classes} onClick={disabled ? false : onClick}>
      {label}
    </div>
  );
}

Button.propTypes = {
  label: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
};

export default Button;
