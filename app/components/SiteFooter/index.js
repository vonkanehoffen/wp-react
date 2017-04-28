/**
*
* SiteFooter
*
*/

import React from 'react';
import config from 'config';
import './style.scss'


function SiteFooter() {
  return (
    <footer id="SiteFooter">
      <div className="container">
        <div className="copyright">
          &copy; Kane Clover 2017. All Rights Reserved.<br />
          <a href="https://github.com/vonkanehoffen/wp-react">Source Code</a>
        </div>
        <div className="social">
          <a href="https://github.com/vonkanehoffen">Github</a>
          <a href="https://twitter.com/k_a_n__e">Twitter</a>
          <a href="https://www.linkedin.com/in/kane-clover-62b43b1b/">LinkedIn</a>
        </div>
        
      </div>
    </footer>
  );
}

SiteFooter.propTypes = {

};

export default SiteFooter;
