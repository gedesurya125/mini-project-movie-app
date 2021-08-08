import { takeLatest } from "@redux-saga/core/effects";
import {
  getMovieDetailsAsync,
  setMoviesAsycn,
  getMoviesTopRatingAsync,
  getMovieCategoryAsync,
  getMovieActorsAsync,
  getMovieReviewAsync,
  getAndAddMovieReviewAsync,
  sendMovieReviewAsync,
  getSearchedMovieWorker
} from "../workerSaga/moviesSagaWorker";
import * as type from '../../actions/actionTypes'


export function* getMoviesWatcher() {
  yield takeLatest(type.GET_MOVIES, setMoviesAsycn);
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

export function* getMovieActorsWatcher() {
  yield takeLatest(type.GET_MOVIE_ACTORS, getMovieActorsAsync);
}

export function* getMovieReviewWatcher() {
  yield takeLatest(type.GET_MOVIE_REVIEW, getMovieReviewAsync);
}
export function* getAndAddMovieReviewWathcer() {
  yield takeLatest(type.GET_AND_ADD_MOVIE_REVIEW, getAndAddMovieReviewAsync);
}

export function* sendMovieReviewWatcher() {
  yield takeLatest(type.SEND_MOVIE_REVIEW, sendMovieReviewAsync);
}

export function* getSearchedMovieWatcher() {
  yield takeLatest(type.GET_SEARCHED_MOVIE, getSearchedMovieWorker);
}