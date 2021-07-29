import { takeLatest } from "@redux-saga/core/effects";
import { GET_MOVIES } from "../../reducers/moviesReducer";
import { setMoviesAsycn } from "../workerSaga/moviesSagaWorker";


export function* getMoviesWatcher (){
  yield takeLatest(GET_MOVIES, setMoviesAsycn);
}