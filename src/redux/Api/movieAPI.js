import axios from 'axios';

// const movieAPI = axios.create({
//   baseURL: "http://localhost:3000/movies"
// })

export const getMovies = (page) => axios.get(`http://localhost:3001/movies-${page}`); // this will be used in saga