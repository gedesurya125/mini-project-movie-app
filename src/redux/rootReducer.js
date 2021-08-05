import { combineReducers} from "redux";
import moviesReducer from "./reducers/moviesReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  user: userReducer,
})

export default rootReducer;