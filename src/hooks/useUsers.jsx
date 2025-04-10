// src/hooks/useUsers.js
import { useState } from 'react';
import { createUser, updateUser, deleteUser, listUser, credentialsUser} from '../services/userService';

export const useUsers = () => {
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null); //aqui almaceno la info de mi usuario

  const addUser = async (userData) => {
    setLoading(true);
    try {
      const res = await createUser(userData);
      return res.data;
    } finally {
      setLoading(false);
    }
  };

  const editUser = async (userData) => {
    setLoading(true);
    try {
      const res = await updateUser(userData);
      return res.data;
    } finally {
      setLoading(false);
    }
  };

  const removeUser = async (userData) => {
    setLoading(true);
    try {
      const res = await deleteUser({ userData });
      return res.data;
    } finally {
      setLoading(false);
    }
  };

  const getUser = async (correo) => {
    setLoading(true);
    try {
      const res = await listUser(correo);
      setSelectedUser(res.data); 
      return res.data;
    } finally {
      setLoading(false);
    }
  };

  const verifyUser = async(correo, contra)=>{
    setLoading(true);
    try{
      const res = await credentialsUser(correo, contra);
      setSelectedUser(res.data);
      return res.data;
    }finally{
      setLoading(false);
    }
  }

  return {
    addUser,
    editUser,
    removeUser,
    getUser,
    verifyUser,
    selectedUser,
    loading,
  };
};
