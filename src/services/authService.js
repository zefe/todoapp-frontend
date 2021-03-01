import axios from './axios'

const login = (data) => {
  return axios.post(`/api/auth`, data);
};

const signup = (data) => {
  return axios.post(`/api/auth/signup`, data);
};

const renewToken = () => {

  let token = localStorage.getItem('token') || '';


  return axios.get(`/api/auth/renew`, {
    headers: {
      'x-token':token
    }
  });
};



export default {
    login,
    signup,
    renewToken
  };