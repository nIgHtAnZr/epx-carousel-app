import React from 'react';

const SlideImage = ({ url }) => {
  return (
    <img
        className="slider-image"
        src={url}
        alt=""
    />
  );
}

export default SlideImage;
