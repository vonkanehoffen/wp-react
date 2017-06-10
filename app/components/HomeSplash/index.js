/**
*
* HomeSplash
*
*/

import React from 'react'
import config from 'config'
import './style.scss'

// TODO: BG overlay can stretch over content sometimes (on live... weird loading thing?)

function HomeSplash() {
  return (
    <section id="HomeSplash">
      <div className="videoBg">
        <video autoPlay loop poster={config.staticAssetRoot+'/splash.jpg'} id="splash-video-bg">
          <source src={config.staticAssetRoot+'/splash.web'} type="video/webm" />
          <source src={config.staticAssetRoot+'/splash.mp4'} type="video/mp4" />
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
