/**
*
* HomeSplash
*
*/

import React from 'react';
import styled from 'styled-components';

function HomeSplash() {
  const HomeSplash = styled.section`
    height: 100vh;
    background: #ff0;
    display: flex;
    .inner {
      margin: auto;
    }
  `;
  return (
    <HomeSplash>
      <div className="inner">
        <h1><span>Kane Clover</span> / Manchester, UK</h1>
        <h2>Web Designer &amp; Full Stack Developer</h2>
      </div>
    </HomeSplash>
  );
}

HomeSplash.propTypes = {

};

export default HomeSplash;
