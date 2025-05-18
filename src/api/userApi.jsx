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

const manageContactos = (payload)=>{
  return httpClient.post('/user/manageContactos', payload);
}

const listContactos = (payload)=>{
  return httpClient.post('/user/listContactos', payload);
}

const sendMessages = (payload)=>{
  return httpClient.post('/websocket/sendMessage', payload);
}


export default {
  manageUsuario,
  listUsuario,
  verifyUsuario,
  manageContactos,
  listContactos,
};
