import * as type from '../actions/actionTypes';
const initialValue = {
  data:[],
  loading: false
}

const movieActorsReducer = (state = initialValue, action) => {
  switch(action.type){
    case type.SET_MOVIE_ACTORS: return{
      ...state,
      data: action.payload
    };
    case type.SET_LOADING_MOVIE_ACTORS: return {
      ...state,
      loading: true
    };
    case type.UNSET_LOADING_MOVIE_ACTORS: return{
      ...state,
      loading: false
    }
    default: return state;
  }
}

export default movieActorsReducer;