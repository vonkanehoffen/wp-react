/**
*
* Tags
*
*/

import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';


function Tags({ terms }) {
  return (
    <ul>
      {terms.map(term =>
        <li>Tag: <Link to={`/tag/slug/${term.slug}/`}>{term.name}</Link></li>
      )}
    </ul>
  );
}

Tags.propTypes = {

};

export default Tags;
