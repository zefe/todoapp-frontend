import axios from './axios'

const login = (data) => {
  return axios.post(`/api/auth`, data);
};

const signup = (data) => {
  return axios.post("/api/auth/signup", data);
};



export default {
    login,
    signup,
  };