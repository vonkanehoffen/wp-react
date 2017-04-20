/**
*
* SiteHeader
*
*/

import React from 'react';
import { Link } from 'react-router';
import SearchIcon from 'material-ui/svg-icons/action/search'
import Header from './style'
import LogoLoader from 'containers/LogoLoader'

function SiteHeader() {

  return (
    <Header>
      <LogoLoader/>
      <ul>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/search"><SearchIcon color="#fff"/></Link></li>
      </ul>
    </Header>
  );
}

SiteHeader.propTypes = {

};

export default SiteHeader;
