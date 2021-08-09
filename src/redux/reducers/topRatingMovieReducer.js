import * as type from '../actions/actionTypes'

const initialState = {
  data:{}, //object of response data detail including list movie inside data array
  loading: false
}

const topRatingMovieReducer = (state = initialState, action) => {
  switch(action.type){
    case type.SET_TOP_RATING_MOVIE: return{
      ...state,
      data: action.payload
    };
    case type.SET_LOADING_TOP_RATING_MOVIE: return{
      ...state,
      loading: true
    };
    case type.UNSET_LOADING_TOP_RATING_MOVIE: return {
      ...state,
      loading: false
    }
    default: return state;
  }
}

export default topRatingMovieReducer;