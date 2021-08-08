// import axios from 'axios';

// const movieAPI = axios.create({
//   baseURL: "https://movie-development-v1.herokuapp.com"
// })
import { movieAPI } from "./setupAPI";

// this will be used in saga
export const getMovies = (params) => movieAPI.get(`/api/v1/movie`,{params}); // params is an object{params:{param1: value1, param2, value2}} // this can be general comman for get movie
export const getMoviesTopRating = (page) => getMovies({page, size: 10, sort: 'des'}); // get top 10 highest rating movies
export const getMovieDetails = (movieId) => movieAPI.get(`/api/v1/movie/${movieId}`); // get movie details by its ID
export const getMovieCategory = () => movieAPI.get('/api/v1/category/');
export const getMovieActors = (movieId) => movieAPI.get(`/api/v1/movie/${movieId}/actors`); // get actors by movie ID
export const getMovieReviews = (movieId) => movieAPI.get(`/api/v1/reviews/${movieId}`); 
export const getMovieReviewsByPage = (movieId, page) => movieAPI.get(`/api/v1/reviews/${movieId}`, {params:{page}});
export const createMovieReviewAPI = (movieId, formUrlEncoded, token) => movieAPI.post(`/api/v1/reviews/${movieId}`, formUrlEncoded, { 
  headers:{
    "Authorization": token,
    "Content-Type": "application/x-www-form-urlencoded"
  }}); //movieId is id of movie in strig format, and formUrlEncoded is data in x-www-form-urlEncoded format. params contains: id_user, id_movie, headline, comment, rating
// export const getMovieByCategory = (page, category) => getMovies({page, size: 10, category, sort:'des'}); //get movie by category
// /api/v1/movie?page=1&size=10&category=Lol&sort=des
 
