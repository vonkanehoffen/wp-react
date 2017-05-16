/**
*
* HomeSplash
*
*/

import React from 'react';
import './style.scss'


function HomeSplash() {
  return (
    <section id="HomeSplash">
      <div className="videoBg">
        <video autoPlay loop poster="http://kanec.co.uk/wp-content/themes/kanec/assets/images/splash.jpg" id="splash-video-bg">
          <source src="http://kanec.co.uk/wp-content/themes/kanec/assets/images/splash.webm" type="video/webm" />
          <source src="http://kanec.co.uk/wp-content/themes/kanec/assets/images/splash.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="inner">
        <div className="container">
          <h1><span>Kane Clover</span> / Manchester, UK</h1>
          <h2>UX Designer &amp; Full Stack Developer</h2>
        </div>
      </div>
    </section>
  );
}

HomeSplash.propTypes = {

};

export default HomeSplash;
