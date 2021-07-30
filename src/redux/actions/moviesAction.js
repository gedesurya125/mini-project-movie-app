import * as type from './actionTypes';
export const setMoviesAction = (payload) => ({type: type.SET_MOVIES, payload}); // remember to write Action in the end of function name
export const getMoviesAction = (pageNumber) => ({type: type.GET_MOVIES, payload: pageNumber}); // page number exampel (1) 
