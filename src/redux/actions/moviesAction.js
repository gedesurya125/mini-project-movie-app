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


//movie review action
export const getMovieReviewAction = (movieId, callback=()=>{}) => ({type: type.GET_MOVIE_REVIEW, payload: movieId, callback}); //used with saga it will get the first page
export const setMovieReviewAction = (reviews) => ({type: type.SET_MOVIE_REVIEW, payload: reviews});
export const setLoadingMovieReviewAction = () => ({type: type.SET_LOADING_MOVIE_REVIEW});
export const unsetLoadingMovieReviewAction = () => ({type: type.UNSET_LOADING_MOVIE_REVIEW});
export const setReviewed = () => ({type: type.SET_REVIEWED});
export const unsetReviewed = () => ({type: type.UNSET_REVIEWED});
export const setMovieReviewIsOutAction =() => ({type: type.SET_MOVIE_REVIEW_ISOUT});
export const unsetMovieReviewIsOutAction = () => ({type: type.UNSET_MOVIE_REVIEW_ISOUT});
export const getAndAddMovieReviewAction = (movieId, page) => ({type: type.GET_AND_ADD_MOVIE_REVIEW, payload:{movieId, page}}); //used with saga it will get movie based on id and page then add it to movieReviewReducer
export const addMovieReviewAction = (reviews) => ({type: type.ADD_MOVIE_REVIEW, payload: reviews}); //REVIEwS MUST BE DATA.ALLDATA from the server /it used to LOAD MORE PURPOSE
export const sendMovieReviewAction = (newReviews, callback = () => {}) => ({type: type.SEND_MOVIE_REVIEW, payload: newReviews, callback}); //used with saga,  newRevies is an object contain: id_user, id_movie, headline, comment, rating
export const setToTopMovieReviewAction = (newReviews) => ({type: type.SET_TO_TOP_MOVIE_REVIEW, payload: newReviews});
//=UPDATE====
export const updateMovieReviewAction = (reviewId, newReview, callback = () => {}) => ({type: type.UPDATE_MOVIE_REVIEW, payload:{reviewId, newReview}, callback})
export const setUpdateReviewFaildAction = () => ({type: type.SET_UPDATE_REVIEW_FAILED});
export const unsetUpdateReviewFailedAction = () => ({type: type.UNSET_UPDATE_REVIEW_FAILED});

export const getSearchedMovieAction = (params) => ({type: type.GET_SEARCHED_MOVIE, payload: params}) // this searching is based on movie title, so params will be matched to movie title with params like so : {title: <<pattern>>, size: <<how many movie>>}
export const setSearchedMovieAction = (data) => ({type: type.SET_SEARCHED_MOVIE, payload: data}) // data here is response of get movie by title that match the pattern, and is count is limited by size, so the params that will be sent to server is like {title: <<pattern>>, size: <<max value have to find>>}
export const resetSearchedMovieAction = () =>({type: type.RESET_SEARCHED_MOVIE});
export const setLoadingSearchedMovieAction = () => ({type: type.SET_LOADING_SEARCHED_MOVIE});
export const unsetLoadingSearchedMovieAction = () => ({type: type.UNSET_LOADING_SEARCHED_MOVIE});
export const setFoundSearchedMovieAction =() => ({type: type.SET_FOUND_SEARCHED_MOVIE});
export const unsetFoundSearchedMovieAction = () => ({type: type.UNSET_FOUND_SEARCHED_MOVIE});

//search review action
export const getReviewByMovieIdAndUserTokenAction = (movieId, callback = () => {}) => ({type: type.GET_REVIEW_BY_MOVIE_AND_USER_TOKEN, payload:movieId, callback});
export const setReviewByMovieIdAndUserTokenAction = (review) => ({type: type.SET_REVIEW_BY_MOVIE_AND_USER_TOKEN, payload: review});
export const resetReviewByMovieIdAndUserTokenAction = () => ({type: type.RESET_REVIEW_BY_MOVIE_AND_USER_TOKEN});
export const setLoadingReviewByMovieIdAndUserTokenAction = () => ({type: type.SET_LOADING_REVIEW_BY_MOVIE_AND_USER_TOKEN});
export const unsetLoadingReviewByMovieIdAndUserTokenAction = () => ({type: type.UNSET_LOADING_REVIEW_BY_MOVIE_AND_USER_TOKEN});