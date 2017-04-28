import React, {PropTypes} from 'react'
import './style.scss'

const TextField = ({value, onChange, id, placeholder, autoFocus}) => {
  return (
    <input className="TextField" type="text" value={value} onChange={onChange} id={id} placeholder={placeholder} />
  );
}

TextField.propTypes = {}

export default TextField