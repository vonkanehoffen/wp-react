/**
*
* FeaturedImage
*
*/

import React from 'react';
import styled from 'styled-components';


function FeaturedMedia({ media }) {
  return (
    <div>
      Featured Image
      <img
        src={media.media_details.sizes.large.source_url}
        alt={media.title.rendered}
      />
    </div>
  );
}

FeaturedMedia.propTypes = {

};

export default FeaturedMedia;
