import { put } from "@redux-saga/core/effects";
import * as type from '../../actions/actionTypes'
import { closeModalLogInAction, closeModalUpdateUser } from "../../actions/modalAction";
import { logOutUser, setLoadingUserAction, setUserAction, unsetLoadingUserAction } from "../../actions/userAction";
import { getCurrentUser, registerUser, signInUserAPI, updateUserAPI } from "../../Api/userAPI";
import FormData from "form-data";


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
    yield put(closeModalLogInAction());
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
    if (response.data.data) {
      yield put(setUserAction(response.data.data))
    } else {
      yield put(logOutUser());
    }
    yield put(unsetLoadingUserAction());
  } catch (err) {
    // console.log('USER NOT LOGGED IN, DETAILS: ',err)
    yield put(unsetLoadingUserAction());
  }
  yield put(unsetLoadingUserAction());
}

export function* signInUserAsync(action) {
  try {
    yield put(setLoadingUserAction());
    const params = new URLSearchParams();
    const { email, password } = action.payload;
    params.append("email", email);
    params.append("password", password);
    const response = yield signInUserAPI(params);
    if (response.data.data) {
      localStorage.setItem('token', `Bearer ${response.data.data.token}`);
      yield put({ type: type.SET_USER, payload: response.data.data });
      yield put(unsetLoadingUserAction());
      yield put(closeModalLogInAction());
    } else {
      console.log("THIS IS THE RESPONSE:", response);
      yield put(unsetLoadingUserAction());
      yield put(closeModalLogInAction());
    }
  } catch (err) {
    console.log(err);
  }
}

export function* updateUserAsycn(action){
  try{
    const {id, data} = action.payload;
    yield put(setLoadingUserAction());
    let dataToSend = new FormData();
    dataToSend.append('fullname', data.full_name);
    dataToSend.append('username', data.user_name);
    dataToSend.append('email', data.email);
    dataToSend.append('password', data.password);

    dataToSend.append('image', data.image
    // , data.image.name
    );
    console.log('DATA GAMBAR DARI SAGA WORKER UPDATE USER ASYNC', data.image)

    const token = localStorage.getItem('token')

    const response = yield updateUserAPI(id, dataToSend, dataToSend._boundary, token);

    if(response.data.data){
      console.log('UPDATE SUCCESS');
      yield put({ type: type.SET_USER, payload: response.data.data });
      yield put(unsetLoadingUserAction());
      yield put(closeModalUpdateUser());
    }else{
      console.log("THIS IS THE RESPONSE:", response);
      yield put(unsetLoadingUserAction());
      yield put(closeModalUpdateUser());
    }
  }catch(err){
    console.log('Error saat Update User di saga worker', err);
  }
}