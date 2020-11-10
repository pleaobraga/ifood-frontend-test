import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import Loading from './components/Atom/Loading'
import DynamicImport from './components/UILess/DynamicImport'
import { isLoggedIn } from './service/spotifyAuth'

const PlayListPage = () => (
  <DynamicImport
    loadComponent={() =>
      import(/*  webpackChunkName: "playlistPage" */ './pages/PlayListPage')
    }
    ErrorComponent={ErrorPage}
    LoadingComponent={() => <Loading />}
  />
)

const LoginPage = () => (
  <DynamicImport
    loadComponent={() =>
      import(/*  webpackChunkName: "loginPage" */ './pages/LoginPage')
    }
    ErrorComponent={ErrorPage}
    LoadingComponent={() => <Loading />}
  />
)

const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<ErrorPage />}>
        <Switch>
          <Route exact path="/">
            {isLoggedIn ? (
              <Redirect to="/login" />
            ) : (
              <Redirect to="/playlist" />
            )}
          </Route>
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/playlist" component={PlayListPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default Routes
