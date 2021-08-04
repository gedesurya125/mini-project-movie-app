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
  id: "1",
  user_name: "surya",
  full_name: "I Gede Surya Adi Pranata",
  email: "gedesurya125@gmail.com",
  image: "https://image.tmdb.org/t/p/w500/34BmdJkdvRweC3xJJFlOFQ2IbYc.jpg",
  logged_in: true
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.SET_USER: return action.payload; // replace entire content of state with new one
    case type.UNSET_USER: return {
      ...state,
      id: "",
      user_name: "",
      full_name: "",
      email: "",
      image: "",
      logged_in: false
    };
    default: return state
  }
}

export default userReducer;