import { takeLatest } from "@redux-saga/core/effects";
import { getCurrentUserAsycn, registerUserAsycn } from "../workerSaga/userSagaWorker";
import * as type from '../../actions/actionTypes'


export function* registerUserWatcher() {
  yield takeLatest(type.REGISTER_USER, registerUserAsycn);
}

export function* getCurrentUserWatcher() {
  yield takeLatest(type.GET_USER, getCurrentUserAsycn);
}