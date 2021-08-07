import { movieAPI } from "./setupAPI";
// import axios from "axios";
export const registerUser = (formData) => movieAPI.post("/auth/signup/",formData);
export const getCurrentUser = (token) => movieAPI.get('/auth/getcurrentuser', {
  headers:{
    "Authorization": token
  }
})

export const signInUserAPI = (formData) => movieAPI.post("/auth/signin", formData); // form data is data {email, password} formated in x-www-form-urlencoded
export const updateUserAPI = (userId, dataToSend, boundary, token) => movieAPI.put(`/auth/user/${userId}`, dataToSend,{
  headers:{
    "Authorization": token,
    'accept': 'application/json',
    'Accept-Language': 'en-US,en;q=0.8',
    'Content-Type': `multipart/form-data; boundary=${boundary}`,
  }
});