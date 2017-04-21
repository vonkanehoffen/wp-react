/*
 *
 * LogoLoader
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import CircularProgress from 'material-ui/CircularProgress';
import LogoImage from 'images/kc-white-500.svg'
import Error from 'components/Error'
import './style.scss'

export class LogoLoader extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { loading, error } = this.props
    return (
      <div id="logoLoader">
        {loading ?
          <CircularProgress color="#fff"/>
        :
          <Link to="/"><img src={LogoImage}/></Link>
        }
        {error && <Error message={error} /> }
      </div>
    );
  }
}

LogoLoader.propTypes = {

};

const mapStateToProps = (state) => {
  return {
    loading: state.posts.loading,
    error: state.posts.error,
  }
}

export default connect(mapStateToProps)(LogoLoader);
