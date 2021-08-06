import { put } from "redux-saga/effects";
import { getMovieActors, getMovieCategory, getMovieDetails, getMovies, getMoviesTopRating } from "../../Api/movieAPI";
import * as type from '../../actions/actionTypes';
import { setLoadingMovieAction, setLoadingMovieActorsAction, setLoadingMovieCategoryAction, setLoadingMovieDetailsAction, setLoadingTopRatingMoviesAction, setMovieActorsAction, setMovieCategoryAction, setMovieDetailsAction, setTopRatingMoviesAction, unsetLoadingMovieAction, unsetLoadingMovieActorsAction, unsetLoadingMovieCategoryAction, unsetLoadingMovieDetailsAction, unsetLoadingTopRatingMoviesAction } from "../../actions/moviesAction";

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

export function* getMovieDetailsAsync(action){
  try{
    yield put(setLoadingMovieDetailsAction());
    const response = yield getMovieDetails(action.payload); //get movie details by id
    if(response.data.data){
      yield put(setMovieDetailsAction(response.data.data)); //set movie after succesfully get the movie details
      yield put(unsetLoadingMovieDetailsAction());
      action.callback();
    }else{
      console.log('ERROR AT SETTING MOVIE TO REDUCERS');
      yield put(unsetLoadingMovieDetailsAction());
    }
  }catch(err){
    console.log('ERROR GET MOVIE DETAILS : ', err);
    yield put(unsetLoadingMovieDetailsAction());
  }
}

export function* getMoviesTopRatingAsync(action){
  try{
    yield put(setLoadingTopRatingMoviesAction());
    const response = yield getMoviesTopRating(action.payload);
    // console.log('RESPOSNSE GET MOVIESTOPRATING ASYNC',response)
    // console.log('BOOLEANNYA', Boolean(response.data.data));
    if(Boolean(response.data.data)){ // check if data movie inside data response is exist
      yield put(setTopRatingMoviesAction(response.data));
      yield put(unsetLoadingTopRatingMoviesAction());
    }else{
      console.log('ERROR AT SETTING DATA TO topRatingMovieReducer.js');
      yield put(unsetLoadingTopRatingMoviesAction());
    }

  }catch(err){
    console.log('ERROR AT GET TOP RATING MOVIE SAGA WORKER', err);
    yield put(unsetLoadingTopRatingMoviesAction());
  }
}

export function* getMovieCategoryAsync(){
  try{
    yield put(setLoadingMovieCategoryAction());
    const response = yield getMovieCategory();
    if(response.data.data){
      yield put(setMovieCategoryAction(response.data.data));
      yield put(unsetLoadingMovieCategoryAction())
    }else{
      console.log('ERROR AT SEETING DATA TO movieCategoryReducer.js');
      yield put(unsetLoadingMovieCategoryAction());
    }
  }catch(err){
    console.log('ERROR ON GET MOVIE CATEGORY AT SAGA WORKER', err)
    yield put(unsetLoadingMovieCategoryAction())
  }
  
}

export function* getMovieActorsAsync(action){
  try{
    yield put(setLoadingMovieActorsAction());
    const response = yield getMovieActors(action.payload);
    if(response.data.data){
      yield put(setMovieActorsAction(response.data));
      yield put(unsetLoadingMovieActorsAction());
    }else{
      console.log('ERROR ON SETTING DATA TO movieActorsReducer');
      yield put(unsetLoadingMovieActorsAction());
    }

  }catch(err){
    console.log('ERROR ON GET MOVIE ACTORS AT SAGA WORKER', err);
    yield put(unsetLoadingMovieActorsAction())
  }
}