/**
*
* DateMeta
*
*/

import React from 'react';
import DateIcon from 'material-ui/svg-icons/action/date-range'
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

function formattedDate(d) {
  if(d) {
    const date = new Date(d)
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }
}


export default DateMeta;
