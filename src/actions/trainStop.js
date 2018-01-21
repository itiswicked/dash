import api from './../api/backend';
import Mbta from './../api/mbta';

export const GET_TRAIN_STOP_DATA = 'GET_TRAIN_STOP_DATA__REQUEST';

export const GET_TRAIN_STOP_DATA_REQUEST = 'GET_TRAIN_STOP_DATA__REQUEST';
export const GET_TRAIN_STOP_DATA_SUCCESS = 'GET_TRAIN_STOP_DATA_SUCCESS';
export const GET_TRAIN_STOP_DATA_FAILURE = 'GET_TRAIN_STOP_DATA_FAILURE';

let getTrainStopDataRequest = () => ({
  type: GET_TRAIN_STOP_DATA_REQUEST
});

let getTrainStopDataSuccess = payload => ({
  type: GET_TRAIN_STOP_DATA_SUCCESS,
  payload
});

let getTrainStopDataFailure = payload => ({
  type: GET_TRAIN_STOP_DATA_FAILURE,
  payload
});

export function getTrainStopData(stopId) {
  return dispatch => {
    console.log('GET fired');
    dispatch(getTrainStopDataRequest());
    api
      .get('/env/MBTA_API_KEY')
      .then(mbtaKey => Mbta.getTrainStop(stopId, mbtaKey.theKey))
      .then(mbtaData => dispatch(getTrainStopDataSuccess(mbtaData)))
      .catch(mbtaError => dispatch(getTrainStopDataFailure(mbtaError)))
  }
}
