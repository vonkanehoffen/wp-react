/**
*
* DateMeta
*
*/

import React from 'react';
import { formattedDate } from 'utils/display'
import config from 'config'
import './style.scss'

function DateMeta({date}) {
  return (
    <div className="DateMeta">
      <i className="material-icons">date_range</i>
      {formattedDate(date)}
    </div>
  );
}

DateMeta.propTypes = {

};

export default DateMeta;
