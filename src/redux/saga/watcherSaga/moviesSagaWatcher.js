import { takeLatest } from "@redux-saga/core/effects";
import {
  getMovieDetailsAsync,
  setMoviesAsycn,
  getMoviesTopRatingAsync,
  getMovieCategoryAsync,
  getMovieActorsAsync
} from "../workerSaga/moviesSagaWorker";
// import { registerUserAsycn } from "../workerSaga/userSagaWorker";
import * as type from '../../actions/actionTypes'


export function* getMoviesWatcher() {
  yield takeLatest(type.GET_MOVIES, setMoviesAsycn);
  // yield takeLatest(type.REGISTER_USER, registerUserAsycn);
}

export function* getMovieDetailsWatcher() {
  yield takeLatest(type.GET_MOVIE_DETAILS, getMovieDetailsAsync);
}

export function* getMoviesTopRatingWatcher() {
  yield takeLatest(type.GET_TOP_RATING_MOVIE, getMoviesTopRatingAsync);
}

export function* getMovieCategoryWatcher() {
  yield takeLatest(type.GET_MOVIE_CATEGORY, getMovieCategoryAsync);
}

export function* getMovieActorsWatcher(){
  yield takeLatest(type.GET_MOVIE_ACTORS, getMovieActorsAsync);
}