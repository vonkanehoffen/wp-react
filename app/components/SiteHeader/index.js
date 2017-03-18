/**
*
* SiteHeader
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Link } from 'react-router';


function SiteHeader() {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/posts">Posts</Link></li>
      </ul>
    </div>
  );
}

SiteHeader.propTypes = {

};

export default SiteHeader;
