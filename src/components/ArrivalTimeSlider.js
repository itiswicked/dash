import React from 'react';
import Slider from 'react-slick';

import { carouselProps } from './../utilities/constants';

const ArrivalTimeSlider = ({ times }) => {
  if(times) {
    let timeComps = times.map((time, index) => {
      return(
        <div key={index} className="arrivals">
          <h6 className="arriving">arriving at {time}</h6>
        </div>
      );
    })
    return(
      <Slider {...carouselProps}>
        {timeComps}
      </Slider>
    )
  } else {
    return <div />
  }

}

export default ArrivalTimeSlider;
