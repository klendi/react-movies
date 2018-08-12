import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Movies from '../components/movies'
import Popular from '../components/popular'
import TopRated from '../components/topRated'
import NotFound from '../components/notFound'
import DetailedMovie from '../components/detailedMovie'

const router = () => {
  return (
    <Switch>
      <Route path="/movie" component={DetailedMovie} />
      <Route path="/movies" component={Movies} />
      <Route path="/popular" component={Popular} />
      <Route path="/top-rated" component={TopRated} />
      <Route path="/not-found" component={NotFound} />
      <Redirect from="/" exact to="/movies" />
      <Redirect to="/not-found" />
    </Switch>
  )
}

export default router
