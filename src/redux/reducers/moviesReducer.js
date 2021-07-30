import * as type from '../actions/actionTypes';


const moviesReducer =(state = [], action) => {
  switch(action.type){
    case type.SET_MOVIES: return action.payload;
    default: return state
  }
}

export default moviesReducer