/**
*
* Tags
*
*/

import React from 'react';
import { Link } from 'react-router'
import config from 'config'
import TagIcon from 'material-ui/svg-icons/action/label'
import './styles.scss'


function Tags({ terms }) {
  return (
    <ul className="Tags">
      {terms.map((term, i) =>
        <li key={i}>
          <Link to={`/tag/${term.slug}/`}>
            <TagIcon color={config.primaryColor} style={{marginRight: '10px'}} />
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
