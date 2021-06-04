import { all, fork } from 'redux-saga/effects'
import { watchSearchSong } from './search/saga'

export default function* IndexSagas() {
  return yield all([fork(watchSearchSong)])
}
