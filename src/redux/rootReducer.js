import { combineReducers} from "redux";
import modalReducer from "./reducers/modalReducer";
import moviesReducer from "./reducers/moviesReducer";
import userReducer from "./reducers/userReducer";
import movieDetailsReducer from "./reducers/movieDetailsReducer";
import topRatingMovieReducer from "./reducers/topRatingMovieReducer";
import movieCategoryReducer from "./reducers/movieCategoryReducer";
import selectedCategoryReducer from "./reducers/selectedCategoryReducer";
import movieActorsReducer from "./reducers/movieActorsReducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  movieDetails: movieDetailsReducer,
  movieCategory: movieCategoryReducer,
  topMovies: topRatingMovieReducer,
  user: userReducer,
  modals: modalReducer,
  selectedCategory: selectedCategoryReducer,
  movieActors: movieActorsReducer
})

export default rootReducer;