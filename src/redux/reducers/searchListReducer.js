import * as type from '../actions/actionTypes'
const initialState = {
  data:[],
  found:false,
  loading: false
}

const searchListReducer = (state = initialState, action) => {
  switch(action.type){
    case type.SET_SEARCHED_MOVIE: return{
      ...state,
      data: action.payload
    };
    case type.RESET_SEARCHED_MOVIE: return initialState;
    case type.SET_LOADING_SEARCHED_MOVIE: return {
      ...state, 
      loading: true
    };
    case type.UNSET_LOADING_SEARCHED_MOVIE: return {
      ...state,
      loading: false
    }
    default: return state
  }
}

export default searchListReducer; 