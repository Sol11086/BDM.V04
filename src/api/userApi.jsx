// src/api/userApi.js
import httpClient from './httpClient';

const manageUsuario = (payload) => {
  return httpClient.post('/user/manageUser', payload);
};

const listUsuario = (payload) => {
  return httpClient.post('user/listUser', payload);
}

const verifyUsuario = (payload)=>{
  return httpClient.post('/user/verify', payload);
}
export default {
  manageUsuario,
  listUsuario,
  verifyUsuario,
};
