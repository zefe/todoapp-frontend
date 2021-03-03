import { instance }  from './axios';

const AUTH_TOKEN = localStorage.getItem('token') || '';

const getAll = () => {
  
  return instance.get("/api/todos", { headers: {'x-token':AUTH_TOKEN} });

};

const get = id => {
  return instance.get(`/todos/${id}`);
};

const create = (data) => {

  return instance.post("/api/todos", data, { headers: {'x-token':AUTH_TOKEN} } );

};

const update = (id, data) => {
  return instance.put(`/todos/${id}`, data);
};

const remove = id => {
  return instance.delete(`/todos/${id}`);
};

export default {
    getAll,
    get,
    create,
    update,
    remove
  };

