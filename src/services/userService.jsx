// src/services/userService.js
import userApi from '../api/userApi';

export const createUser = async (data) => {
  const payload = {
    operacion: 1,
    ...data,
  };
  //console.log("Payload:", payload);
  return userApi.manageUsuario(payload);
};

export const updateUser = async (data) => {
  const payload = {
    operacion: 2,
    ...data,
  };
  return userApi.manageUsuario(payload);
};

export const deleteUser = async (data) => {
  return userApi.manageUsuario({
    operacion: 3,
    ...data,
  });
};

export const listUser = async (correo) => {
  return userApi.listUsuario({
    correo: correo
  });
};

export const credentialsUser = async (correo, contra) =>{
  return userApi.verifyUsuario({
    correo: correo,
    contra: contra
  })
};
