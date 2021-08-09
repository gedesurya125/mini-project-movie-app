import * as type from '../actions/actionTypes';

const initialState = {
  data:[],
  loading: false
}
const movieCategoryReducer =(state = initialState, action)=> {
  switch(action.type){
    case type.SET_MOVIE_CATEGORY: return {
      ...state,
      data: action.payload
    };
    case type.SET_LOADING_MOVIE_CATEGORY: return {
      ...state,
      loading: true
    };
    case type.UNSET_LOADING_MOVIE_CATEGORY: return {
      ...state,
      loading: false
    };
    default: return state;
  }
}

export default movieCategoryReducer;