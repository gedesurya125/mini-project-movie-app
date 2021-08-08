import { put } from "redux-saga/effects";
import { 
  createMovieReviewAPI, 
  getMovieActors, 
  getMovieCategory, 
  getMovieDetails, 
  getMovieReviews, 
  getMovieReviewsByPage, 
  getMovies, 
  getMoviesTopRating, 
  getReviewByMovieIdAndUserToken
} from "../../Api/movieAPI";
import * as type from '../../actions/actionTypes';
import { 
  addMovieReviewAction, 
  resetReviewByMovieIdAndUserTokenAction, 
  resetSearchedMovieAction, 
  setFoundSearchedMovieAction, 
  setLoadingMovieAction, 
  setLoadingMovieActorsAction, 
  setLoadingMovieCategoryAction, 
  setLoadingMovieDetailsAction, 
  setLoadingMovieReviewAction, 
  setLoadingReviewByMovieIdAndUserTokenAction, 
  setLoadingSearchedMovieAction, 
  setLoadingTopRatingMoviesAction, 
  setMovieActorsAction, 
  setMovieCategoryAction, 
  setMovieDetailsAction, 
  setMovieReviewAction,  
  setMovieReviewIsOutAction, 
  setReviewByMovieIdAndUserTokenAction, 
  setReviewed, 
  setSearchedMovieAction, 
  setTopRatingMoviesAction, 
  unsetLoadingMovieAction, 
  unsetLoadingMovieActorsAction, 
  unsetLoadingMovieCategoryAction, 
  unsetLoadingMovieDetailsAction, 
  unsetLoadingMovieReviewAction, 
  unsetLoadingReviewByMovieIdAndUserTokenAction, 
  unsetLoadingTopRatingMoviesAction, 
} from "../../actions/moviesAction";

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

export function* getMovieReviewAsync(action){
  try{
    // yield put(unsetReviewed());
    yield put(setLoadingMovieReviewAction());
    const response = yield getMovieReviews(action.payload);
    if(response.data.page){
      yield put(setMovieReviewAction(response.data));
      yield put(unsetLoadingMovieReviewAction());
    }else{
      console.log('ERROR ON SETTING MOVIE REVIEW AT SAGA WORKER');
      yield put(unsetLoadingMovieReviewAction());
    }
  }catch(err){
    console.log('ERROR ON GET MOVIE REVIEW AT SAGA WORKER', err);
    yield put(unsetLoadingMovieReviewAction())
  }
}

export function* getAndAddMovieReviewAsync(action){
  try{
    yield put(setLoadingMovieReviewAction());
    const {movieId, page} = action.payload;
    const response = yield getMovieReviewsByPage(movieId, page);
    if(response.data.page){
      yield put(addMovieReviewAction(response.data.allData));
      yield put(unsetLoadingMovieReviewAction())
    }else{
      console.log('MOVIE REVIEW IS OUT OR OTHER PROBLEM')
      yield put(setMovieReviewIsOutAction());
      yield put(unsetLoadingMovieReviewAction());
    }
  }catch(err){
    console.log('ERROR ON GET AND ADD MOVIE REVIEW AT SAGA WORKER', err);
    yield put(unsetLoadingMovieReviewAction())
  }
};

export function* sendMovieReviewAsync(action){
  try{
    yield put(setLoadingMovieReviewAction());
    const {id_user, id_movie, headline, comment, rating} = action.payload;
    console.log(' DATA FROM SAGA WORKER', action.payload);
    const params = new URLSearchParams();
    params.append("id_user", id_user);
    params.append("id_movie", id_movie);
    params.append("headline", headline);
    params.append("comment", comment);
    params.append("rating", rating);
    const token = localStorage.getItem('token');
    const response = yield createMovieReviewAPI(id_movie, params, token);
    //after send the review set the review to the reducer on the top with already provided function
    if(response.data.message === "review created successfully"){
      // yield put(setTopRatingMoviesAction(response.data.data)); //POTENTIAL BUG
      //the review panel pust reload itself after sending new Review, if not we have to triger dispatch
      console.log('REVIEW HAS BEEN SENT BROO');
      yield put(setReviewed());
      yield put(unsetLoadingMovieReviewAction());
    }else{
      console.log('THIS MOVIE HAS BEEN REVIEWED - AT SAGA WORKER');
      yield put(unsetLoadingMovieReviewAction());
    }
  }catch(err){
    console.log('ERROR ON SENDING REVIEWS TO THE SERVER', err);
    yield put(unsetLoadingMovieReviewAction());
  }
}

export function* getSearchedMovieWorker(action){
  try{
    yield put(setLoadingSearchedMovieAction());
    const response = yield getMovies(action.payload);
    if(response.data.data){
      //FOUND
      yield put(setSearchedMovieAction(response.data.data)); // we only need the data not page
      yield put(setFoundSearchedMovieAction()); // set found flag
      yield put(unsetLoadingMovieDetailsAction());
    }else{
      //NOT FOUND
      console.log('SEARCHED MOVIE NOT FOUND FROM getSearchedMovieWorker AT SAGA WORKER')
      yield put(resetSearchedMovieAction()); //set all back to initialState
    }
  }catch(err){
    console.log('ERROR ON GETTING SEARCHED MOVIE AT WORKER SAGA', err);
    yield put(resetSearchedMovieAction());
    // yield put(unsetLoadingSearchedMovieAction());
  }
}

export function* getReviewByMovieIdAndUserIdWorker(action){
  try{
    yield put(setLoadingReviewByMovieIdAndUserTokenAction());
    const userToken = localStorage.getItem('token');
    const response = yield getReviewByMovieIdAndUserToken(action.payload, userToken);
    if(response.data.data.length){
      console.log('REVIEW FOUND AT SAGA WORKER GET REVIEW BY MOVIE ID AND USER TOKEN',response.data.data)
      yield put(setReviewByMovieIdAndUserTokenAction(response.data.data));
      yield put(unsetLoadingReviewByMovieIdAndUserTokenAction());
    }else{
      console.log('REVIEW NOT FOUND AT SAGA WORKER GET REVIEW BY MOVIE ID AND USER TOKEN');
      yield put(resetReviewByMovieIdAndUserTokenAction())
    }
  }catch(err){
    console.log('ERROR GETTING USER REVIEW FOR THIS MOVIE AT SAGA WORKER');
    yield put(unsetLoadingReviewByMovieIdAndUserTokenAction());
  }
}