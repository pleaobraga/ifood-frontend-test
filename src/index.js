import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import CssBaseline from '@material-ui/core/CssBaseline'
import rootReducers from './redux'
import Routes from './routes'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const enhancer = composeEnhancers(applyMiddleware(ReduxThunk))

const store = createStore(rootReducers, enhancer)

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <Routes />
  </Provider>,
  document.getElementById('root')
)
