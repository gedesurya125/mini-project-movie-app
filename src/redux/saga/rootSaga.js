import { all } from "redux-saga/effects";
import { getMoviesWatcher } from "./watcherSaga/moviesSagaWatcher";
import { getCurrentUserWatcher, registerUserWatcher, signInUserWatcher } from "./watcherSaga/userSagaWatcher";

export default function* rootSaga(){
  yield all([
    getMoviesWatcher(),
    registerUserWatcher(),
    getCurrentUserWatcher(),
    signInUserWatcher()
  ])
}