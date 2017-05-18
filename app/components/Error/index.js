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
      <div className="modal">
        <i className="material-icons">warning</i><b>Error:</b> {message}
      </div>
    </div>
  );
}

Error.propTypes = {
  messsage: React.PropTypes.string
};

export default Error;
