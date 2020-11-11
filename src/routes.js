import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import Loading from './components/Atom/Loading'
import DynamicImport from './components/UILess/DynamicImport'
import { Header } from './components/Organism/Header'

const PlayListPage = () => (
  <DynamicImport
    loadComponent={() =>
      import(/*  webpackChunkName: "playlistPage" */ './pages/PlayListPage')
    }
    ErrorComponent={ErrorPage}
    LoadingComponent={() => <Loading />}
  />
)

const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<ErrorPage />}>
        <Header />
        <Switch>
          <Route exact path="/" component={PlayListPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default Routes
