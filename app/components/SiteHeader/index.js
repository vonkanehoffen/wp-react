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
     ul {
       list-style: none;
     }
       li {
         display: inline-block;
       }
  `;
  return (
    <Header>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </Header>
  );
}

SiteHeader.propTypes = {

};

export default SiteHeader;
