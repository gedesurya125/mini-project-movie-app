import * as type from './actionTypes';


export const openModalLogInAction = () => ({type: type.SET_MODAL_LOGIN_OPEN});
export const closeModalLogInAction = () => ({type: type.SET_MODAL_LOGIN_CLOSE});
export const openModalUpdateUser = () => ({type: type.OPEN_MODAL_UPDATE_USER});
export const closeModalUpdateUser = () => ({type: type.CLOSE_MODAL_UPDATE_USER});

export const openModalUpdateReviewAction = () => ({type: type.OPEN_MODAL_UPDATE_REVIEW});
export const closeModalUpdateReviewAction = () => ({type: type.CLOSE_MODAL_UPDATE_REVIEW});

