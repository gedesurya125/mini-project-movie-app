import * as type from '../actions/actionTypes'

const initialState = {
  modalLogIn: false,
}

const modalReducer = (state = initialState, action) => {
  switch(action.type){
    case type.SET_MODAL_LOGIN_OPEN: return {
      ...state,
      modalLogIn: true,
    };
    case type.SET_MODAL_LOGIN_CLOSE: return {
      modalLogIn: false,
    }
    default: return state;
  }
}

export default modalReducer;