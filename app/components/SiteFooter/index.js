/**
*
* SiteFooter
*
*/

import React from 'react';
import styled from 'styled-components';
import config from 'config';

function SiteFooter() {

  SiteFooter = styled.footer`
    background: #f00;
    padding: 15px 0;
  `

  return (
    <SiteFooter>
      <div className="container">
        <h4>Footer</h4>
      </div>
    </SiteFooter>
  );
}

SiteFooter.propTypes = {

};

export default SiteFooter;
