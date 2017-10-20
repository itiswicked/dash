import React from 'react';
import Slider from 'react-slick';

import { carouselProps } from './../utilities/constants';


const CountdownSlider = ({ countDownTimes }) => {
  if(countDownTimes) {
    let countComps = countDownTimes.map((time, index) => {
      return (
        <div key={index} className="time-away">
          <h1 className="time-minutes">{time}</h1>
          <p>minutes</p>
        </div>
      )
    });

    return(
      <Slider {...carouselProps}>
        {countComps}
      </Slider>
    );
  } else {
    return <div />;
  }

}

export default CountdownSlider;
