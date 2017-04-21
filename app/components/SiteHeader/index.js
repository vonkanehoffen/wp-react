/**
*
* SiteHeader
*
*/

import React from 'react';
import { Link } from 'react-router';
import SearchIcon from 'material-ui/svg-icons/action/search'
import LogoLoader from 'containers/LogoLoader'
import './style.scss'

function SiteHeader() {

  return (
    <header id="siteHeader">
      <LogoLoader/>
      <ul>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/search"><SearchIcon color="#fff"/></Link></li>
      </ul>
    </header>
  );
}

SiteHeader.propTypes = {

};

export default SiteHeader;
