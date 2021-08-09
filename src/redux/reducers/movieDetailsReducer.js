import * as type from '../actions/actionTypes';


const initialState = {
  data:{},
  loading: false
}
const movieDetailsReducer = (state = initialState, action) => {
  switch(action.type){
    case type.SET_MOVIE_DETAILS: return{
      ...state,
      data: action.payload
    };
    case type.SET_LOADING_MOVIE_DETAILS: return{
      ...state,
      loading: true
    };
    case type.UNSET_LOADING_MOVIE_DETAILS: return{
      ...state,
      loading: false
    }
    default: return state
  }
}

export default movieDetailsReducer;