/**
*
* SiteHeader
*
*/

import React from 'react';
import { Link } from 'react-router';
import LogoLoader from 'containers/LogoLoader'
import './style.scss'

function SiteHeader() {

  return (
    <header id="siteHeader">
      <LogoLoader/>
      <ul>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/search"><i className="material-icons">search</i></Link></li>
      </ul>
    </header>
  );
}

SiteHeader.propTypes = {

};

export default SiteHeader;
