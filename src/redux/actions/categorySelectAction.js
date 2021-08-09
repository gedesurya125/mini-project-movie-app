import * as type from './actionTypes';

export const setCategoryAction = (category) => ({type: type.SET_CATEGORY, payload: category});
export const resetCategoryAction = () => ({type: type.RESET_CATEGORY});
export const setPageCategoryAction = (page) => ({type: type.SET_PAGE_CATEGORY, payload: page});