import filterSagas from './filter'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([...filterSagas])
}
