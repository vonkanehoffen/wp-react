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
      {terms.map((term, i) =>
        <li key={i}>Tag: <Link to={`/tag/${term.slug}/`}>{term.name}</Link></li>
      )}
    </ul>
  );
}

Tags.propTypes = {

};

export default Tags;
