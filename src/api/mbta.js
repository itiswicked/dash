import fetchJson from './fetchJson';

class Mbta {
  constructor() {
    this.domain = 'http://realtime.mbta.com'
    this.base = `${this.domain}/developer/api/v2`;
  }

  handleResponse(json) {
    let { error } = json;
    if (error) {
      throw Error(error);
    } else {
      return json;
    }
  }

  getTrainStop(stopId, key) {
    let request = `/predictionsbystop?api_key=${key}&stop=${stopId}&format=json`
    return fetchJson(this.base + request)
    .then(this.handleResponse);
  }

}

export default new Mbta();
