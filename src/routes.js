import React, { Suspense } from 'react'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DynamicImport from './components/DynamicImport'
import ErrorPage from './pages/ErrorPage'
import Loading from './components/Atom/Loading'

const WelcomePage = () => (
  <DynamicImport
    loadComponent={() =>
      import(/*  webpackChunkName: "playListPage" */ './pages/PlayListPage')
    }
    ErrorComponent={ErrorPage}
    LoadingComponent={() => <Loading />}
  />
)

const Routes = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Suspense fallback={<ErrorPage />}>
            <Switch>
              <Route exact path="/" component={WelcomePage} />
              <Route component={ErrorPage} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </MuiThemeProvider>
  )
}

export default Routes
