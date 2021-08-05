import { takeLatest } from "@redux-saga/core/effects";
import { 
  getCurrentUserAsycn, 
  registerUserAsycn, 
  signInUserAsync 
} from "../workerSaga/userSagaWorker";
import * as type from '../../actions/actionTypes'


export function* registerUserWatcher() {
  yield takeLatest(type.REGISTER_USER, registerUserAsycn);
}

export function* getCurrentUserWatcher() {
  yield takeLatest(type.GET_USER, getCurrentUserAsycn);
}

export function* signInUserWatcher(){
  yield takeLatest(type.SIGN_IN_USER, signInUserAsync);
}