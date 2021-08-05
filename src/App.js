import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMoviesAction } from "./redux/actions/moviesAction";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviesAction(1));
  }, [dispatch]);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={() => <HomePage />} /> {/**HomePage */}
        <Route
          path="/details/:movie_id"
          component={() => <DetailsPage />}
        />{" "}
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
