import axios from 'axios';

export const movieAPI = axios.create({
  baseURL: "https://movie-development-v1.herokuapp.com"
})