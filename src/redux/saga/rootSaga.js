import { all } from "redux-saga/effects";
import { 
  getMovieDetailsWatcher, 
  getMoviesWatcher,
  getMoviesTopRatingWatcher,
  getMovieCategoryWatcher,
  getMovieActorsWatcher,
  getMovieReviewWatcher,
  getAndAddMovieReviewWathcer,
  sendMovieReviewWatcher,
  getSearchedMovieWatcher
} from "./watcherSaga/moviesSagaWatcher";
import { 
  getCurrentUserWatcher, 
  registerUserWatcher, 
  signInUserWatcher, 
  updateUserWatcher 
} from "./watcherSaga/userSagaWatcher";

export default function* rootSaga(){
  yield all([
    getMoviesWatcher(),
    registerUserWatcher(),
    getCurrentUserWatcher(),
    signInUserWatcher(),
    updateUserWatcher(),
    getMovieDetailsWatcher(),
    getMoviesTopRatingWatcher(),
    getMovieCategoryWatcher(),
    getMovieActorsWatcher(),
    getMovieReviewWatcher(),
    getAndAddMovieReviewWathcer(),
    sendMovieReviewWatcher(),
    getSearchedMovieWatcher()
  ])
}