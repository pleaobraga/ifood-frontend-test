import configureStore from 'redux-mock-store'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
export const mockStore = configureStore([sagaMiddleware])


export const initialStateFilterReducer = {
  filters: [],
  isFetching: false,
  error: {},
}

export const initialStateRootReducer = {
  filter: initialStateFilterReducer,
}
