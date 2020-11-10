import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import rootSaga from './sagas'
import rootReducers from './reducer'
import Routes from './routes'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'

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
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Routes />
    </MuiPickersUtilsProvider>
  </Provider>,
  document.getElementById('root')
)
