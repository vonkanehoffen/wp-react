/**
*
* SiteFooter
*
*/

import React from 'react';
import config from 'config';
import TagsList from 'containers/TagsList'
import './style.scss'
import gitHubIcon from './images/github.svg'
import twitterIcon from './images/twitter.svg'
import linkedInIcon from './images/linkedin.svg'

function SiteFooter() {
  return (
    <footer id="SiteFooter">
      <div className="container">
        <div className="flex-row">
          <div className="col">
            <h4>Hello.</h4>
            <div className="social">
              <a href="https://github.com/vonkanehoffen"><img src={gitHubIcon} alt="Github" className="socialIcon" /></a>
              <a href="https://twitter.com/k_a_n__e"><img src={twitterIcon} alt="Twitter" className="socialIcon" /></a>
              <a href="https://www.linkedin.com/in/kane-clover-62b43b1b/"><img src={linkedInIcon} alt="LinkedIn" className="socialIcon" /></a>
            </div>
            <div className="copyright">
              <p>All content, code and design by Kane Clover 2017.<br />
              React front end, backed by Wordpress.
              </p>
              <p><small><a href="https://github.com/vonkanehoffen/wp-react">Source Code</a> licensed under <a href="https://choosealicense.com/licenses/gpl-3.0/">GNU GPLv3</a>.<br />
                Content licensed under a <a href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a></small></p>
            </div>
          </div>
          <div className="col">
            <h4>Tags</h4>
            <TagsList/>
          </div>
        </div>


        
      </div>
    </footer>
  );
}

SiteFooter.propTypes = {

};

export default SiteFooter;
