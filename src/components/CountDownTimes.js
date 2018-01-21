import React from 'react';

const CountDownTimes = ({ countDownTimes }) => {
  return countDownTimes.map((time, index) => (
    <div key={index} className="time-away">
      <h1 className="time-minutes">{time}</h1>
      <p className="time-label">{time === 1 ? "minute" : "minutes"}</p>
    </div>
  ));
};

export default CountDownTimes;
