import { takeLatest } from "@redux-saga/core/effects";
import { setMoviesAsycn } from "../workerSaga/moviesSagaWorker";
import * as type from '../../actions/actionTypes'


export function* getMoviesWatcher (){
  yield takeLatest(type.GET_MOVIES, setMoviesAsycn);
}