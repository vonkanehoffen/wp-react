/**
*
* Button
*
*/

import React from 'react';
import styled from 'styled-components';
import config from 'config'

function Button({ label }) {
  const Button = styled.div`
    display: inline-block;
    cursor: pointer;
    background: ${config.primaryColor};
    color: #fff;
    padding: 10px 15px;
    transition: background-color 0.3s;
    &:hover {
      background: ${config.primaryColorLight};
    }
  `
  return (
    <Button>
      {label}
    </Button>
  );
}

Button.propTypes = {
  label: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
};

export default Button;
