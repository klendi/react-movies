import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Movies from '../components/movies'
import Popular from '../components/popular'
import TopRated from '../components/topRated'

const router = () => {
  return (
    <Switch>
      <Route path="/movies" component={Movies} />
      <Route path="/" exact component={Movies} />
      <Route path="/popular" exact component={Popular} />
      <Route path="/top-rated" exact component={TopRated} />
    </Switch>
  )
}

export default router
