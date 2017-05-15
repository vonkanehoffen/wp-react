/**
 *
 * Loading Indicator
 *
 */

import React from 'react';
import './style.scss'

function LoadingIndicator({post}) {
  return (
    <div className="LoadingIndicator">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
    </div>
  )
}

LoadingIndicator.propTypes = {

}

export default LoadingIndicator
