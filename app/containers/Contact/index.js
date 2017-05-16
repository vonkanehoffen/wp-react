/*
 *
 * Contact
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

export class Contact extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Contact"
          meta={[
            { name: 'description', content: 'Get in touch!' },
          ]}
        />
        <h1>Contact me page</h1>
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
