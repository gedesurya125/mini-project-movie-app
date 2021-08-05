import { combineReducers} from "redux";
import modalReducer from "./reducers/modalReducer";
import moviesReducer from "./reducers/moviesReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
  user: userReducer,
  modals: modalReducer
})

export default rootReducer;