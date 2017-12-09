import moment from 'moment';

import {
  GET_TRAIN_STOP_DATA_REQUEST,
  GET_TRAIN_STOP_DATA_SUCCESS,
  GET_TRAIN_STOP_DATA_FAILURE
} from './../actions/trainStop';

let initialState = {
  fetching: false,
  error: null,
  nearestTrips: null
};

export default function trainStop(state = initialState, action) {
  switch(action.type) {
    case GET_TRAIN_STOP_DATA_REQUEST:
      return Object.assign({}, state, { fetching: true });
    case GET_TRAIN_STOP_DATA_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        nearestTrips: nearestTrips(action.payload)
      });
    case GET_TRAIN_STOP_DATA_FAILURE:
      return Object.assign({}, state, { fetching: false, error: "error" });
    default:
      return state;
  }
}

function nearestTrips(payload) {
  return payload.mode[0].route[0].direction.map(direction => {
      let trip = getNextTrip(direction.trip);
      let terminal = trip.trip_headsign;
      return { terminal, arrivalTime: moment(trip.sch_arr_dt, "X") };
    });
}

function getNextTrip(trips) {
  return trips.find(trip => {
    let arrivalTime = moment(trip.sch_arr_dt, "X");
    return arrivalTime.isAfter(moment()) && arrivalTime.diff(moment(), 'minutes') > 0;
  });
}
