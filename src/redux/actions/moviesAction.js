import * as type from './actionTypes';
//movie
export const setMoviesAction = (payload) => ({type: type.SET_MOVIES, payload}); // remember to write Action in the end of function name
export const getMoviesAction = (params) => ({type: type.GET_MOVIES, payload: params}); // params is an object containing parameters to the backend example {page: 1, size: 10, etc...}
export const setLoadingMovieAction = () => ({type: type.SET_LOADING_MOVIE});
export const unsetLoadingMovieAction = () => ({type: type.UNSET_LOADING_MOVIE});

//movie details
export const getMovieDetailsAction = (movieId, callback) => ({type: type.GET_MOVIE_DETAILS, payload: movieId, callback}); // ADDING CALLBACK
export const setMovieDetailsAction = (movie) => ({type: type.SET_MOVIE_DETAILS, payload: movie}); // movie must be and object
export const setLoadingMovieDetailsAction = () => ({type: type.SET_LOADING_MOVIE_DETAILS});
export const unsetLoadingMovieDetailsAction = () => ({type: type.UNSET_LOADING_MOVIE_DETAILS});

//top rating movies
export const getTopRatingMoviesAction = (page) => ({type: type.GET_TOP_RATING_MOVIE, payload: page});
export const setTopRatingMoviesAction = (payload) => ({type: type.SET_TOP_RATING_MOVIE, payload}); // payload is an object containing data movies in data array
export const setLoadingTopRatingMoviesAction = () => ({type: type.SET_LOADING_TOP_RATING_MOVIE});
export const unsetLoadingTopRatingMoviesAction = () => ({type: type.UNSET_LOADING_TOP_RATING_MOVIE});

//movie category
export const getMovieCategoryAction = () => ({type: type.GET_MOVIE_CATEGORY}); // get all movie category
export const setMovieCategoryAction = (payload) => ({type: type.SET_MOVIE_CATEGORY, payload}); //payload is list of movie category in array format
export const setLoadingMovieCategoryAction = () => ({type: type.SET_LOADING_MOVIE_CATEGORY});
export const unsetLoadingMovieCategoryAction = () => ({type: type.UNSET_LOADING_MOVIE_CATEGORY});

//movie actors

export const getMovieActorsAction = (movieId) => ({type: type.GET_MOVIE_ACTORS, payload: movieId});
export const setMovieActorsAction = (data) => ({type: type.SET_MOVIE_ACTORS, payload: data}) // set data to movieActorsReducer
export const setLoadingMovieActorsAction = () => ({type: type.SET_LOADING_MOVIE_ACTORS});
export const unsetLoadingMovieActorsAction = () => ({type: type.UNSET_LOADING_MOVIE_ACTORS});
