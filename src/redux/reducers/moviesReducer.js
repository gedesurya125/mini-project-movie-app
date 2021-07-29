export const SET_MOVIES = "SET_MOVIES";
export const GET_MOVIES = "GET_MOVIES"; // get is used in saga



const moviesReducer =(state = [], action) => {
  switch(action.type){
    case SET_MOVIES: return action.payload;
    default: return state
  }
}

export default moviesReducer