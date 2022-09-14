
import React from 'react';
import Carousel from "../components/Carousel";

const SlideWrapper = () => {
  return <>
        <Carousel key={1} Slides={5} Infinite={false} />
        <Carousel key={2} Slides={1} Infinite={true} />
        <Carousel key={3} Slides={10} Infinite={false} />
  </>;
}

export default SlideWrapper