import { put } from "redux-saga/effects";
import { getMovies } from "../../Api/movieAPI";
import * as type from '../../actions/actionTypes';

export function* setMoviesAsycn (action){
  try{
    const response = yield getMovies(action.payload); // payload is page number
    // console.log(action.payload)
    yield put({type: type.SET_MOVIES, payload: response.data})
  }catch(err){
    yield put({type: type.REQ_FAILED, payload: err})
  }
}