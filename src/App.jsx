import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getMoviesAction } from './redux/actions/moviesAction'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import UserProfilePage from './pages/UserProfilePage';
import AdminPage from './pages/AdminPage';

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMoviesAction({page: 1, size: 10}))
  }, [dispatch])
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={() => (<HomePage />)} /> {/**HomePage */}
        <Route path="/details/:movie_id" component={() => (<DetailsPage />)} />
        <Route path="/user/profile/:user_id" component={() => (<UserProfilePage />)} />
        <Route path="/admin" component={() => (<AdminPage />)} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
