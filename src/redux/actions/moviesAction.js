import { SET_MOVIES, GET_MOVIES } from "../reducers/moviesReducer";
export const setMoviesAction = (payload) => ({type: SET_MOVIES, payload}); // remember to write Action in the end of function name
export const getMoviesAction = (pageNumber) => ({type: GET_MOVIES, payload: pageNumber}); // page number exampel (1) 
