/**
*
* Error
*
*/

import React from 'react';
import './style.scss'


function Error({ message }) {
  return (
    <div className="Error">
      <b>Error:</b> {message}
    </div>
  );
}

Error.propTypes = {
  messsage: React.PropTypes.string
};

export default Error;
