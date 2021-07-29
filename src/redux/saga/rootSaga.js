import { all } from "redux-saga/effects";
import { getMoviesWatcher } from "./watcherSaga/moviesSagaWatcher";

export default function* rootSaga(){
  yield all([
    getMoviesWatcher()
  ])
}