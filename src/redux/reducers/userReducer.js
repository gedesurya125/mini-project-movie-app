import * as type from '../actions/actionTypes';

// "{
//   data: {
//             token : (str)
//             id : (str)
//             user_name : (str) 
//             full_name : (str) 
//             email : (str)
//             image : (str)
//   },
//  status : 200
// }"


const initialState = {
  data: {
    id: "",
    user_name: "",
    full_name: "",
    email: "",
    image: "",
    role: "",
  },
  logged_in: false,
  loading: false,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.SET_USER: return {
      ...state,
      data:action.payload,
      logged_in: true
    }; // replace entire content of state with new one
    case type.UNSET_USER: return {
      ...state,
      data:{},
      logged_in: false
    };
    case type.SET_LOADING_USER: return {
      ...state,
      loading: true
    };
    case type.UNSET_LOADING_USER: return {
      ...state,
      loading: false
    }
    default: return state
  }
}

export default userReducer;