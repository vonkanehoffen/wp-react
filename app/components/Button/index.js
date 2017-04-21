/**
*
* Button
*
*/

import React from 'react';
import config from 'config'
import './style.scss'

function Button({ label }) {
  return (
    <div className="Button">
      {label}
    </div>
  );
}

Button.propTypes = {
  label: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
};

export default Button;
