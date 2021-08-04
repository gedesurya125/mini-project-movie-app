import * as type from './actionTypes';

export const logOutUser = () => ({type: type.UNSET_USER});
export const signUpUser = ( username, fullname, email, password, image = null) =>({
  type: type.REGISTER_USER,
  payload:{
    fullname, 
    username,
    email,
    password,
    image
  }
});

export const getLoggedInUser = () => ({type: type.GET_USER});