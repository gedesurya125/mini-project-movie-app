import { takeLatest } from "@redux-saga/core/effects";
import { setMoviesAsycn } from "../workerSaga/moviesSagaWorker";
// import { registerUserAsycn } from "../workerSaga/userSagaWorker";
import * as type from '../../actions/actionTypes'


export function* getMoviesWatcher (){
  yield takeLatest(type.GET_MOVIES, setMoviesAsycn);
  // yield takeLatest(type.REGISTER_USER, registerUserAsycn);
}