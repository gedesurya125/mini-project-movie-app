import { put } from "redux-saga/effects";
import { getMovies } from "../../Api/movieAPI";
import * as type from '../../actions/actionTypes';
import { setLoadingMovieAction, unsetLoadingMovieAction } from "../../actions/moviesAction";

export function* setMoviesAsycn (action){
  try{
    yield put(setLoadingMovieAction());
    const response = yield getMovies(action.payload); // payload is page number
    // console.log(action.payload)
    yield put({type: type.SET_MOVIES, payload: response.data});
    yield put(unsetLoadingMovieAction());
  }catch(err){
    yield put({type: type.REQ_FAILED, payload: err})
  }
}