import * as type from '../actions/actionTypes'

const initialState = {
  data: {
    page: '',
    total_result: 0,
    allData: []
  },
  loading: false,
  reviewed: false,
  isOut: false
}
const movieReviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.SET_MOVIE_REVIEW: return {
      ...state,
      data: action.payload,
    };
    case type.ADD_MOVIE_REVIEW: return {
      ...state,
      data: {
        ...state.data,
        allData: [
          ...state.data.allData,
          ...action.payload
        ]
      }
    };
    case type.SET_LOADING_MOVIE_REVIEW: return {
      ...state,
      loading: true
    };
    case type.UNSET_LOADING_MOVIE_REVIEW: return {
      ...state,
      loading: false
    };
    case type.SET_REVIEWED: return {
      ...state,
      reviewed: true
    };
    case type.UNSET_REVIEWED: return {
      ...state,
      reviewed: false
    };
    case type.SET_MOVIE_REVIEW_ISOUT: return {
      ...state,
      isOut: true
    };
    case type.UNSET_MOVIE_REVIEW_ISOUT: return {
      ...state,
      isOut: false
    };
    case type.SET_TO_TOP_MOVIE_REVIEW: return {
      ...state,
      data: {
        ...state.data,
        allData: [
          action.payload, //the response already an objec from server {}
          ...state.data.allData
        ]
      }
    }
    default: return state
  }
}

export default movieReviewReducer
