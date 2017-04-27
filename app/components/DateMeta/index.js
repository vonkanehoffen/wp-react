/**
*
* DateMeta
*
*/

import React from 'react';
import DateIcon from 'material-ui/svg-icons/action/date-range'
import { formattedDate } from 'utils/display'
import config from 'config'
import './style.scss'

function DateMeta({date}) {
  return (
    <div className="DateMeta">
      <DateIcon color={config.primaryColor} style={{marginRight: '10px'}} />
      {formattedDate(date)}
    </div>
  );
}

DateMeta.propTypes = {

};

export default DateMeta;
