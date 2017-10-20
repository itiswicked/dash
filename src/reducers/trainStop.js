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
      console.log(action.payload.mode[0].route);
      let nearestTrips = action.payload.mode[0].route[0].direction.map(direction => {
        let trip = direction.trip[0]
        let arrivalTime = moment(trip.sch_arr_dt, "X");
        let terminal = trip.trip_headsign;
        return { terminal, arrivalTime };
      });

      return Object.assign({}, state, {
        fetching: false,
        nearestTrips
      });
    case GET_TRAIN_STOP_DATA_FAILURE:
      return Object.assign({}, state, { fetching: false, error: "error" });
    default:
      return state;
  }
}
