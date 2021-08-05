import { put } from "@redux-saga/core/effects";
import * as type from '../../actions/actionTypes'
import { logOutUser, setLoadingUserAction, setUserAction, unsetLoadingUserAction } from "../../actions/userAction";
import { getCurrentUser, registerUser } from "../../Api/userAPI";


export function* registerUserAsycn(action) {
  try {
    yield put(setLoadingUserAction())
    const params = new URLSearchParams();
    const { fullname, username, email, password, image } = action.payload;
    params.append('fullname', fullname);
    params.append('username', username);
    params.append('email', email);
    params.append('password', password);
    params.append('image', image);
    const response = yield registerUser(params);
    localStorage.setItem('token', `Bearer ${response.data.data.token}`);
    yield put({ type: type.SET_USER, payload: response.data.data });
    yield put(unsetLoadingUserAction());
  } catch (err) {
    console.log(err)
  }
}

export function* getCurrentUserAsycn(action) {
  try {
    yield put(setLoadingUserAction());
    const token = localStorage.getItem('token')
    // console.log(token);
    const response = yield getCurrentUser(token);
    // console.log(response);
    if (response.data.data) {
      yield put(setUserAction(response.data.data))
    } else {
      yield put(logOutUser());
    }
    yield put(unsetLoadingUserAction());
  } catch (err) {
    console.log(err)
  }
}