/**
*
* SiteHeader
*
*/

import React from 'react';
import { Link } from 'react-router';
import SearchIcon from 'material-ui/svg-icons/action/search'
import Header from './style'
import LogoImage from 'images/kc-white-500.svg'

function SiteHeader() {

  return (
    <Header>
      <ul>
        <li><Link to="/"><img src={LogoImage} /></Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/search"><SearchIcon color="#fff"/></Link></li>
      </ul>
    </Header>
  );
}

SiteHeader.propTypes = {

};

export default SiteHeader;
