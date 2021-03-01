import axios from './axios';
import { config } from '../config/config';

const getAll = () => { 
  
  let token = localStorage.getItem('token') || '';

  return axios.get("/api/todos", {
    headers: {
      'x-token':token
    }
  });
};

const get = id => {
  return axios.get(`/todos/${id}`);
};

const create = (data) => {

  let token = localStorage.getItem('token') || '';
  console.log(token)
  
  return axios.post("/api/todos", data, {
      headers: {
        'x-token':token
      }
  }
  );

};

const update = (id, data) => {
  return axios.put(`/todos/${id}`, data);
};

const remove = id => {
  return axios.delete(`/todos/${id}`);
};

export default {
    getAll,
    get,
    create,
    update,
    remove
  };

