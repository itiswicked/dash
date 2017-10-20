import React from 'react';
import Slider from 'react-slick'

import { carouselProps } from './../utilities/constants';

const TerminalSlider = ({ terminals }) => {
  if(terminals) {
    let times = terminals.map((terminal, index) => {
      return <h5 key={index}>to {terminal}</h5>;
    });

    return(
      <Slider {...carouselProps} >
        {times}
      </Slider>
    )
  } else {
    return <div />;
  }

}

export default TerminalSlider;
