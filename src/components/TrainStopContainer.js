import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import TerminalSlider from './TerminalSlider';
import ArrivalTimeSlider from './ArrivalTimeSlider';
import CountdownSlider from './CountdownSlider';

import { getTrainStopData } from './../actions/trainStop';


class TrainStopContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stopId: 'place-sbmnl',
      interval: 1000 * 60,
      poop: 1
    }

  }

  componentWillMount() {
    let stopId = this.state.stopId;
    this.props.getTrainStop(stopId)
    let poll = setInterval(
      () => this.props.getTrainStop(stopId),
      this.state.interval
    );
    this.setState({ poll });
  }

  componentWillUnMount() {
    clearInterval(this.state.poll);
  }

  getMinutesFromNow(time) {
    let _moment_ = moment();
    let diff = time.diff(moment())
    let minutes = moment.duration(diff).asMinutes()

    return Math.floor(minutes);
  }

  getDisplayTime(time) {
    return time.format('h:mm')
  }

  render() {
    let trips = this.props.trainStop.nearestTrips;
    // console.log("FOREST HILLS: ", trips && trips[0].arrivalTime.calendar());
    // console.log("OAK GROVE: ", trips && trips[1].arrivalTime.calendar());
    // console.log("TIME NOW", moment().calendar());
    // console.log("------------------------------------");
    let terminals = trips && trips.map(trip => trip.terminal);
    let arrivalTimes = trips && trips.map(trip => this.getDisplayTime(trip.arrivalTime));
    let countDownTimes = trips && trips.map(trip => this.getMinutesFromNow(trip.arrivalTime));

    return(
      <div className="train-wrapper">
        <div className="circle-wrapper">
        </div>
        <div className="train">
          <div className="train-info">
            <h2 className="train-stop"> Stony Brook </h2>
            <TerminalSlider terminals={terminals} />
            <ArrivalTimeSlider times={arrivalTimes} />
          </div>
          <div className="time-away-wrapper">
            <CountdownSlider countDownTimes={countDownTimes} />
          </div>
        </div>
      </div>
    )
  }
}


let mapStateToProps = state => ({
  trainStop: state.trainStop
});

let mapDispatchToProps = dispatch => ({
  getTrainStop: stopId => dispatch(getTrainStopData(stopId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainStopContainer);
