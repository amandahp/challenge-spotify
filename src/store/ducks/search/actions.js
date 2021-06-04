export function fetchData(songName) {
  return {
    type: 'FETCH_DATA',
    songName
  }
}

export function fetchDataSuccess(payload) {
  return {
    type: 'FETCH_DATA_SUCCESS',
    payload
  }
}

export function fetchDataError(error) {
  return {
    type: 'FETCH_DATA_ERROR',
    error
  }
}
