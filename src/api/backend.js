import fetchJson from './fetchJson';

class Api {
  constructor() {
    this.domain = 'http://localhost:8000';
    this.base = `${this.domain}/api`;
  }

  handleResponse(json) {
    let { error } = json;
    if (error) {
      throw Error(error);
    } else {
      return json;
    }
  }

  get(request) {
    return fetchJson(this.base + request)
    .then(this.handleResponse)
  }

}


export default new Api();
