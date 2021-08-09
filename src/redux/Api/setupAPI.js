import axios from 'axios';
export const sourceUrl = "https://movie-development-v1.herokuapp.com";
// export const sourceUrl = "https://macan-api.gabatch13.my.id"

export const movieAPI = axios.create({
  baseURL: sourceUrl
})
