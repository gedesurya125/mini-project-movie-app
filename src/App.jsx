import React, { useEffect } from 'react'
import { 
  useDispatch
  // , useSelector 
} from 'react-redux'
import { getMovieCategoryAction, getMoviesAction, getTopRatingMoviesAction } from './redux/actions/moviesAction'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import UserProfilePage from './pages/UserProfilePage';
import AdminPage from './pages/AdminPage';
// import BackdropSpinner from './components/loading/BackdropSpinner';
import { getLogedInUser } from './redux/actions/userAction';

const App = () => {
  const dispatch = useDispatch()
  // const {loading} = useSelector(state => state.movies);
  // console.log(loading);
  useEffect(() => {
    dispatch(getMoviesAction({ page: 1, size: 10 }))
    dispatch(getTopRatingMoviesAction(1));
    dispatch(getMovieCategoryAction());
    const token = localStorage.getItem('token');
    if(token){
      dispatch(getLogedInUser());
    }
  }, [dispatch])
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={() => (<HomePage />)} /> {/**HomePage */}
        <Route path="/details/:movie_id" component={() => (<DetailsPage />)} />
        <Route path="/user/profile" component={() => (<UserProfilePage />)} />
        <Route path="/admin" component={() => (<AdminPage />)} />
      </Switch>
      <Footer />
      {/* <BackdropSpinner open={loading} /> */}
    </Router>
  )
}

export default App
