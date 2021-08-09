import * as type from '../actions/actionTypes'
const initialState = {
  name: "All",
  value: '',
  page: 1
};



const selectedCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.SET_CATEGORY: return {
      ...state,
      name: action.payload,
      value: action.payload,
    };
    case type.SET_PAGE_CATEGORY: return {
      ...state,
      page: action.payload
    };
    case type.RESET_CATEGORY: return initialState;
    default: return state
  }
}

export default selectedCategoryReducer;