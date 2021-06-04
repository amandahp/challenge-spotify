import { call, put, takeLatest } from 'redux-saga/effects'

import { searchSong } from '../../../services/songApi/song'
import { fetchDataSuccess, fetchDataError } from './actions'

function* getData({ songName }) {
  try {
    const response = yield call(searchSong, songName)
    console.log(response)
    yield put(fetchDataSuccess(response.items))
  } catch (err) {
    yield put(fetchDataError(err))
    console.log(err)
  }
}

export function* watchSearchSong() {
  yield takeLatest('FETCH_DATA', getData)
}
