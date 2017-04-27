/**
*
* Button
*
*/

import React from 'react';
import config from 'config'
import './style.scss'

function Button({ label, primary, onClick }) {
  return (
    <div className={'Button' + (primary ? ' primary': '')} onClick={onClick}>
      {label}
    </div>
  );
}

Button.propTypes = {
  label: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
};

export default Button;
