export default function fetchJson(url) {
  return fetch(url)
  .then(res => {
    if(res.ok) {
      return res.json()
    } else {
      throw Error({
        status: res.status,
        statusText: res.statusText
      });
    }
  })
}
