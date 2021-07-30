export const SET_USER = "SET_USER";
export const GET_USER = "GET_USER"; //used with saga
export const UPDATE_USER = "UPDATE_USER"; //used with saga
export const UNSET_USER = "UNSET_USER"; // for logging out purpose


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
  id:"",
  user_name: "",
  full_name: "",
  email: "",
  image: "",
  logged_in: false
}

const userReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_USER: return action.payload; // replace entire content of state with new one
    case UNSET_USER: return initialState;
    default: return state
  }
}

export default userReducer;