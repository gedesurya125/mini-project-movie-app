import { put } from "redux-saga/effects";
import { getMovies } from "../../Api/movieAPI";
import { SET_MOVIES } from "../../reducers/moviesReducer";

export function* setMoviesAsycn (action){
  const response = yield getMovies(action.payload); // payload is page number
  // console.log(action.payload)
  yield put({type: SET_MOVIES, payload: response.data})
}