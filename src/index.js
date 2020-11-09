import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import rootSaga from './sagas'
import rootReducers from './redux'
import Routes from './routes'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const sagaMiddleware = createSagaMiddleware()

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(rootReducers, enhancer)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <Routes />
  </Provider>,
  document.getElementById('root')
)
