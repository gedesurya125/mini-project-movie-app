// moviesReducer =====================
export const SET_MOVIES = "SET_MOVIES";
export const GET_MOVIES = "GET_MOVIES"; // get is used in saga
export const REQ_FAILED = "REQ_FAILED";
export const SET_LOADING_MOVIE = "SET_LOADING_MOVIE";
export const UNSET_LOADING_MOVIE = "UNSET_LOADING_MOVIE"


//topRatingMovieReducer
export const GET_TOP_RATING_MOVIE = "GET_TOP_RATING_MOVIE"; // used by saga
export const SET_TOP_RATING_MOVIE = "SET_TOP_RATING_MOVIE"; // set movie to topRatingMovieReducer
export const SET_LOADING_TOP_RATING_MOVIE = "SET_LOADING_TOP_RATING_MOVIE"; // set true the loading status
export const UNSET_LOADING_TOP_RATING_MOVIE = "UNSET_LOADING_TOP_RATING_MOVIE"; // set false the loading status



// movie Details Reducer =============
export const GET_MOVIE_DETAILS = "GET_MOVIE_DETAILS"; // itu used by saga
export const SET_MOVIE_DETAILS = "SET_MOVIE_DETAILS"; // its used to replace entire
export const SET_LOADING_MOVIE_DETAILS = "SET_LOADING_MOVIE_DETAILS"; // its used to set loading movie details
export const UNSET_LOADING_MOVIE_DETAILS = "UNSET_LOADING_MOVIE_DETAILS;" //its uset do unset loading movie details


// movieCategoryReducer ==============
export const GET_MOVIE_CATEGORY = "GET_MOVIE_CATEGORY";
export const SET_MOVIE_CATEGORY = "SET_MOVIE_CATEGORY";
export const SET_LOADING_MOVIE_CATEGORY = "SET_LOADING_MOVIE_CATEGORY";
export const UNSET_LOADING_MOVIE_CATEGORY = "UNSET_LOADING_MOVIE_CATEGORY";


// userReducerAction =================
export const SET_USER = "SET_USER";
export const GET_USER = "GET_USER"; //used with saga
export const UPDATE_USER = "UPDATE_USER"; //used with saga
export const UNSET_USER = "UNSET_USER"; // for logging out purpose
export const REGISTER_USER = "REGISTER_USER"; // used in saga
export const SET_LOADING_USER = "SET_LOADING_USER";
export const UNSET_LOADING_USER = "UNSET_LOADING_USER";
export const SIGN_IN_USER = "SIGN_IN_USER"; // used in saga


// modal Reducer ====================
export const SET_MODAL_LOGIN_OPEN = "SET_MODAL_LOGIN_OPEN";
export const SET_MODAL_LOGIN_CLOSE = "SET_MODAL_LOGIN_CLOSE";
export const OPEN_MODAL_UPDATE_USER = "OPEN_MODAL_UPDATE_USER";
export const CLOSE_MODAL_UPDATE_USER = "CLOSE_MODAL_UPDATE_USER";

// selectedCategoryReducer ============
export const SET_CATEGORY = "SET_CATEGORY";
export const RESET_CATEGORY = "RESET_CATEGORY";
export const SET_PAGE_CATEGORY = "SET_PAGE_CATEGORY";

//  movieActorsReducer =================
export const GET_MOVIE_ACTORS = "GET_MOVIE_ACTORS";
export const SET_MOVIE_ACTORS = "SET_MOVIE_ACTORS";
export const SET_LOADING_MOVIE_ACTORS = "SET_LOADING_MOVIE_ACTORS";
export const UNSET_LOADING_MOVIE_ACTORS = "UNSET_LOADING_MOVIE_ACTORS"