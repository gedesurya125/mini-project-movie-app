import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getMoviesAction } from './redux/actions/moviesAction'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMoviesAction(1))
  }, [dispatch])
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={()=>(<HomePage />)} /> {/**HomePage */}
        <Route path="/details/:movie_id" component={() => (<DetailsPage />)} />
      </Switch>
    </Router>
  )
}

export default App
