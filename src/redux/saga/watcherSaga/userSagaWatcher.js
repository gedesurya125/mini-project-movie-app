import { takeLatest } from "@redux-saga/core/effects";
import { 
  getCurrentUserAsycn, 
  registerUserAsycn, 
  signInUserAsync, 
  updateUserAsycn
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

export function* updateUserWatcher(){
  yield takeLatest(type.UPDATE_USER, updateUserAsycn);
}