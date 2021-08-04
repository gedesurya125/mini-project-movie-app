// import axios from 'axios';

// const movieAPI = axios.create({
//   baseURL: "https://movie-development-v1.herokuapp.com"
// })
import { movieAPI } from "./setupAPI";

// this will be used in saga
export const getMovies = (params) => movieAPI.get(`/api/v1/movie`,{params}); 
