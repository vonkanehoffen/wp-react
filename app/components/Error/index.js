/**
*
* Error
*
*/

import React from 'react';
import styled from 'styled-components';


function Error({ message }) {
  const Error = styled.div`
      background: #d00;
      color: #fff;
      padding: 10px;
    `;
  return (
    <Error>
      <b>Error:</b> {message}
    </Error>
  );
}

Error.propTypes = {
  messsage: React.PropTypes.string
};

export default Error;
