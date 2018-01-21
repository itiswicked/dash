import fetchJson from './fetchJson';

const DOMAIN = 'http://realtime.mbta.com';
const BASE = `${DOMAIN}/developer/api/v2`

class Mbta {
  handleResponse(json) {
    let { error } = json;
    if (error) {
      throw Error(error);
    } else {
      return json;
    }
  }

  static getTrainStop(stopId, key) {
    let request = `/predictionsbystop?api_key=${key}&stop=${stopId}&format=json`
    return fetchJson(BASE + request)
    .then(this.handleResponse);
  }

}

export default Mbta;
