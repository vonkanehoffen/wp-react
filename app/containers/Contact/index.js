/*
 *
 * Contact
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import emailAddress from './emailAddress.svg'
import './style.scss'

export class Contact extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div id="Contact">
        <Helmet
          title="Contact"
          meta={[
            { name: 'description', content: 'Get in touch!' },
          ]}
        />
        <div className="container">
          <h2>Tell me stuff.</h2>
          <img src={emailAddress} alt="hello (at) kanec dot uk"/>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Contact);
