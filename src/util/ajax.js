import { Alert } from 'react-native';

const HOST = 'http://localhost:7001/';
function getQueryString(data) {
  if (!data) {
    return '';
  }
  let queryString = '';
  for (const i in data.keys()) {
    if (data.hasOwnProperty(i)) {
      queryString += `&${i}=${data[i]}`;
    }
  }
  return queryString;
}

export const get = (uri, query) => {
  const queryString = getQueryString(query);
  let uriWithQueryString;
  if (uri.contains('?')) {
    uriWithQueryString = uri + queryString;
  } else {
    uriWithQueryString = uri + queryString.replace('&', '?'); // replace the `&` at the beginning to `?`
  }
  // eslint-disable-line
  return fetch(HOST + uriWithQueryString)
    .then(res => res.json())
    .catch(Alert.alert);
};

