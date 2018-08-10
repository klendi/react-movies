import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Movies from '../components/movies'
// import Movie from '../components/movie'
import Popular from '../components/popular'

const router = () => {
  return (
    <Switch>
      <Route path="/movies" component={Movies} />
      <Route path="/" exact component={Movies} />
      <Route path="/popular" exact component={Popular} />
    </Switch>
  )
}

export default router
