import { all } from "redux-saga/effects";
import { getMoviesWatcher } from "./watcherSaga/moviesSagaWatcher";
import { getCurrentUserWatcher, registerUserWatcher } from "./watcherSaga/userSagaWatcher";

export default function* rootSaga(){
  yield all([
    getMoviesWatcher(),
    registerUserWatcher(),
    getCurrentUserWatcher(),
  ])
}