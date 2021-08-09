import * as type from '../actions/actionTypes';

const initialState = {
  data:[],
  loading: false
}

const searchReviewReducer = (state = initialState, action) => {
  switch(action.type){
    case type.SET_REVIEW_BY_MOVIE_AND_USER_TOKEN: return {
      ...state,
      data: action.payload
    };
    case type.RESET_REVIEW_BY_MOVIE_AND_USER_TOKEN: return initialState;
    case type.SET_LOADING_REVIEW_BY_MOVIE_AND_USER_TOKEN: return {
      ...state,
      loading: true
    };
    case type.UNSET_LOADING_REVIEW_BY_MOVIE_AND_USER_TOKEN: return {
      ...state,
      loading: false
    };
    default: return state;
  }
}

export default searchReviewReducer;