import { takeLatest, call, put, fork } from 'redux-saga/effects'
import {
  getFilterSuccess,
  getFilterError,
  GET_FILTER,
} from '../redux/FilterReducer'
import { getFilterAPI } from '../api/Filters'

function* getFilter() {
  try {
    const response = yield call(getFilterAPI)
    yield put(getFilterSuccess(response.data))
  } catch (e) {
    yield put(
      getFilterError({
        error: 'An error occurred when trying to get the filters',
      })
    )
  }
}

function* watchGetFilterRequest() {
  yield takeLatest(GET_FILTER, getFilter)
}

const filterSagas = [fork(watchGetFilterRequest)]

export default filterSagas
