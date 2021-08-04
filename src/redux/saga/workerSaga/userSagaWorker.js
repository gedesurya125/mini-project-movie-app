import { put } from "@redux-saga/core/effects";
import * as type from '../../actions/actionTypes'
import { registerUser } from "../../Api/userAPI";


export function* registerUserAsycn(action){
  try{
    const params = new URLSearchParams();
    const {fullname, username, email, password, image} =  action.payload;
    params.append('fullname', fullname);
    params.append('username', username);
    params.append('email', email);
    params.append('password', password);
    params.append('image', image);
    const response = yield registerUser(params);
    localStorage.setItem('token', `Bearer ${response.data.data.token}`);
    yield put({type: type.SET_USER, payload: response.data.data})
  }catch(err){
    console.log(err)
  }
}

export function* getCurrentUserAsycn(action){
  
}