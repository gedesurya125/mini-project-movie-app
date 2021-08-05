import { movieAPI } from "./setupAPI";
// import axios from "axios";
export const registerUser = (formData) => movieAPI.post("/auth/signup/",formData);
export const getCurrentUser = (token) => movieAPI.get('/auth/getcurrentuser', {
  headers:{
    "Authorization": token
  }
})

export const signInUserAPI = (formData) => movieAPI.post("/auth/signin", formData); // form data is data {email, password} formated in x-www-form-urlencoded
