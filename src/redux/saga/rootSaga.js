import { all } from "redux-saga/effects";
import { getMoviesWatcher } from "./watcherSaga/moviesSagaWatcher";
import { registerUserWatcher } from "./watcherSaga/userSagaWatcher";

export default function* rootSaga(){
  yield all([
    getMoviesWatcher(),
    registerUserWatcher(),
  ])
}