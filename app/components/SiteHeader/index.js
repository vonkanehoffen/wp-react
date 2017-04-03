/**
*
* SiteHeader
*
*/

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';


function SiteHeader() {

  const Header = styled.header`
     position: absolute;
  `;
  return (
    <Header>
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
    </Header>
  );
}

SiteHeader.propTypes = {

};

export default SiteHeader;
