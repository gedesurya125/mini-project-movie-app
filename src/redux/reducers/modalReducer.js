import * as type from '../actions/actionTypes'

const initialState = {
  modalLogIn: false,
  modalUpdateUser: false
}

const modalReducer = (state = initialState, action) => {
  switch(action.type){
    case type.SET_MODAL_LOGIN_OPEN: return {
      ...state,
      modalLogIn: true,
    };
    case type.SET_MODAL_LOGIN_CLOSE: return {
      modalLogIn: false,
    };
    case type.OPEN_MODAL_UPDATE_USER: return {
      ...state,
      modalUpdateUser: true
    };
    case type.CLOSE_MODAL_UPDATE_USER: return {
      ...state,
      modalUpdateUser: false
    }
    default: return state;
  }
}

export default modalReducer;