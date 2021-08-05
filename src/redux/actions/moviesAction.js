import * as type from './actionTypes';
export const setMoviesAction = (payload) => ({type: type.SET_MOVIES, payload}); // remember to write Action in the end of function name
export const getMoviesAction = (params) => ({type: type.GET_MOVIES, payload: params}); // page number exampel (1) 
export const setLoadingMovieAction = () => ({type: type.SET_LOADING_MOVIE});
export const unsetLoadingMovieAction = () => ({type: type.UNSET_LOADING_MOVIE});