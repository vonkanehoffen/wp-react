/**
*
* FeaturedImage
*
*/

import React from 'react';
import styled from 'styled-components';


function FeaturedMedia({ post }) {
  return (
    <div>
      Featured Image
      <pre>{JSON.stringify(post.featured_media, null, 2)}</pre>
    </div>
  );
}

FeaturedMedia.propTypes = {

};

export default FeaturedMedia;
