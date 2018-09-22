import React from 'react'
import { Route, Switch, Redirect, Router } from 'react-router-dom'
import Movies from '../components/movies'
import Popular from '../components/popular'
import TopRated from '../components/topRated'
import NotFound from '../components/notFound'
import DetailedMovie from '../components/detailedMovie'

const router = () => {
  return (
    <Switch>
      <Route path="/movie" component={DetailedMovie} />
      <Route exact path="/" component={Movies} />
      <Route path="/popular" component={Popular} />
      <Route path="/top-rated" component={TopRated} />
      <Route path="/not-found" component={NotFound} />
    </Switch>
  )
}

export default router
