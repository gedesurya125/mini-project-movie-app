import * as type from '../actions/actionTypes';

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
  openInfoModal: false, //this is for login state
  openRegisterInfo: false // this id for register state
  
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
    };
    case type.OPEN_LOGIN_INFO_MODAL: return {
      ...state,
      openInfoModal: true
    };
    case type.CLOSE_LOGIN_INFO_MODAL: return {
      ...state,
      openInfoModal: false
    };
    case type.OPEN_REGISTER_INFO: return {
      ...state,
      openRegisterInfo: true
    };
    case type.CLOSE_REGISTER_INFO: return {
      ...state,
      openRegisterInfo: false
    }
    default: return state
  }
}

export default userReducer;