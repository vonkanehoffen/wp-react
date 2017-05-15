/**
*
* Tags
*
*/

import React from 'react';
import { Link } from 'react-router'
import './styles.scss'


function Tags({ terms }) {
  return (
    <ul className="Tags">
      {terms.map((term, i) =>
        <li key={i}>
          <Link to={`/tag/${term.slug}/`}>
            <i className="material-icons">label</i>
            {term.name}
          </Link>
        </li>
      )}
    </ul>
  );
}

Tags.propTypes = {

};

export default Tags;
